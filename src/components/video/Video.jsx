import React, { useEffect, useRef, useState } from "react";
import * as V from "./Video.style";
import * as faceapi from "face-api.js";

const Video = () => {
  const [modelsLoaded, setModelsLoaded] = useState(false);
  const [captureVideo, setCaptureVideo] = useState(false);

  const videoRef = useRef();
  const canvasRef = useRef();
  const videoHeight = 720;
  const videoWidth = 1280;

  useEffect(() => {
    startVideo();
    const loadModels = async () => {
      Promise.all([
        faceapi.nets.tinyFaceDetector.loadFromUri("/models"),
        faceapi.nets.faceLandmark68Net.loadFromUri("/models"),
        faceapi.nets.faceRecognitionNet.loadFromUri("/models"),
        faceapi.nets.faceExpressionNet.loadFromUri("/models"),
      ]).then(setModelsLoaded(true));
    };
    loadModels();
  }, []);

  const startVideo = () => {
    setCaptureVideo(true);
    navigator.mediaDevices
      .getUserMedia({ video: { width: 300 } })
      .then((stream) => {
        let video = videoRef.current;
        video.srcObject = stream;
        video.play();
      })
      .catch((err) => {
        console.error("error:", err);
      });
  };

  const handleVideoOnPlay = () => {
    setInterval(async () => {
      if (canvasRef && canvasRef.current) {
        canvasRef.current.innerHTML = faceapi.createCanvasFromMedia(
          videoRef.current
        );
        const displaySize = {
          width: videoWidth,
          height: videoHeight,
        };

        faceapi.matchDimensions(canvasRef.current, displaySize);

        const detections = await faceapi
          .detectAllFaces(
            videoRef.current,
            new faceapi.TinyFaceDetectorOptions()
          )
          .withFaceLandmarks()
          .withFaceExpressions();

        const resizedDetections = faceapi.resizeResults(
          detections,
          displaySize
        );

        canvasRef &&
          canvasRef.current &&
          canvasRef.current
            .getContext("2d")
            .clearRect(0, 0, videoWidth, videoHeight);

        drawBackgorund(resizedDetections[0].expressions);
      }
    }, 1000); //시간 설정 ms 단위
  };

  const closeWebcam = () => {
    videoRef.current.pause();
    videoRef.current.srcObject.getTracks()[0].stop();
    setCaptureVideo(false);
  };

  let faceKind = [
    "angry",
    "disgusted",
    "fearful",
    "happy",
    "neutral",
    "sad",
    "surprised",
  ];
  let face = "";

  const drawBackgorund = (resizedDetections) => {
    var target = 1;
    var abs = 0;
    var min = 100;

    let data = [
      resizedDetections.angry,
      resizedDetections.disgusted,
      resizedDetections.fearful,
      resizedDetections.happy,
      resizedDetections.neutral,
      resizedDetections.sad,
      resizedDetections.surprised,
    ];

    for (let i = 0; i < data.length; i++) {
      abs = data[i] - target < 0 ? -(data[i] - target) : data[i] - target;
      if (abs < min) {
        min = abs;
        face = faceKind[data.indexOf(data[i])];
      }
    }
    console.log(face);
  };

  return (
    <div>
      {captureVideo ? (
        modelsLoaded ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              padding: "10px",
            }}
          >
            <video
              ref={videoRef}
              height={videoHeight}
              width={videoWidth}
              onPlay={handleVideoOnPlay}
              style={{ borderRadius: "10px" }}
            />
            <canvas ref={canvasRef} style={{ position: "absolute" }} />
          </div>
        ) : (
          <div>loading...</div>
        )
      ) : (
        <></>
      )}
    </div>
  );
};

export default Video;
