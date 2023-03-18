import * as bodyPix from "@tensorflow-models/body-pix";
import * as faceapi from "@vladmandic/face-api";
import { TinyFaceDetectorOptions } from "@vladmandic/face-api";

/**
 *
 * @param {HTMLVideoElement} video
 * @param {HTMLCanvasElement} canvas
 * @param {HTMLVideoElement | HTMLCanvasElement | HTMLImageElement} background
 * @param {(text: string) => void} onresult
 * @param {number} fps
 */

const ai = (video, canvas, background, onresult, fps = 60) => {
  Promise.all([
    bodyPix.load(),
    faceapi.nets.faceRecognitionNet.loadFromUri("./model"),
    faceapi.nets.tinyFaceDetector.loadFromUri("./model"),
    faceapi.nets.faceLandmark68Net.loadFromUri("./model"),
    faceapi.nets.faceExpressionNet.loadFromUri("./model"),
  ]).then((res) => {
    console.log("<=========START==========>");
    const [net] = res;

    const context = canvas.getContext("2d");

    const faceapiCanvas = document.createElement("canvas");
    faceapiCanvas.width = video.videoWidth;
    faceapiCanvas.height = video.videoHeight;
    faceapi.matchDimensions(canvas, {
      width: video.videoWidth,
      height: video.videoHeight,
    });

    const sexCanvas = document.createElement("canvas");
    sexCanvas.width = video.videoWidth;
    sexCanvas.height = video.videoHeight;
    const sexCtx = sexCanvas.getContext("2d");

    const tempCanvas = document.createElement("canvas");
    tempCanvas.width = video.videoWidth;
    tempCanvas.height = video.videoHeight;
    const tempCtx = tempCanvas.getContext("2d");

    setInterval(() => {
      const detections = faceapi
        .detectAllFaces(video, new TinyFaceDetectorOptions())
        .withFaceLandmarks()
        .withFaceExpressions();

      detections.then((e) => {
        if (e.length > 0) {
          const t = e[0].expressions;
          let big = 0;
          let bigstr = "";
          Object.keys(t).forEach((v) => {
            if (t[v] > big) {
              big = t[v];

              bigstr = v;
            }
          });
          onresult(bigstr);
        }
      });

      net.segmentPerson(video).then((segmentation) => {
        const mask = bodyPix.toMask(segmentation);
        tempCtx.putImageData(mask, 0, 0);
        // draw original image
        sexCtx.drawImage(video, 0, 0, canvas.width, canvas.height);
        // use destination-out, then only masked area will be removed
        sexCtx.save();
        sexCtx.globalCompositeOperation = "destination-out";
        sexCtx.drawImage(tempCanvas, 0, 0, canvas.width, canvas.height);
        sexCtx.restore();

        context.clearRect(0, 0, canvas.width, canvas.height);
        context.drawImage(background, 0, 0, canvas.width, canvas.height);
        context.drawImage(sexCanvas, 0, 0, canvas.width, canvas.height);
      });
    }, 1000 / fps);
  });
};

export default ai;
