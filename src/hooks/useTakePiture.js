import backimage from "../assets/dgswback.jpg";
import angryimg from "../assets/angry.jpeg";
import sadimg from "../assets/sad.jpg";
import fearImg from "../assets/fearful.jpg";
import happyImg from "../assets/happy.jpg";
import surprisedImg from "../assets/surprised.jpg";
import disgustedImg from "../assets/disgusted.jpg";
import dgswback from "../assets/dgswback.jpg";
import ai from "../ai";
import React, { useEffect, useRef } from "react";
import { pictureState } from "../atom/picture";
import { useRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";

const useTakePiture = () => {
  const canvasRef = useRef();
  const imageRef = useRef();
  const [imageList, setImageList] = useRecoilState(pictureState);
  const navigate = useNavigate();

  // useEffect(() => {
  //   console.log(imageList);
  //   if (imageList.length >= 2) {
  //     navigate("/adornment");
  //   }
  // }, [imageList]);

  const getCamera = () => {
    return new Promise((res, rej) => {
      let All_mediaDevices = navigator.mediaDevices;
      if (!All_mediaDevices || !All_mediaDevices.getUserMedia) {
        console.log("getUserMedia() not supported.");
        return;
      }
      All_mediaDevices.getUserMedia({
        video: { width: 640, height: 480 },
      })
        .then((vidStream) => {
          let video = document.createElement("video");
          video.srcObject = vidStream;
          video.addEventListener("canplay", () => {
            res(video);
          });
        })
        .catch((e) => {
          rej();
        });
    });
  };

  useEffect(() => {
    imageRef.current.src = backimage;
    getCamera().then((video) => {
      // const buttonElement = document.createElement("button");
      // buttonElement.innerText = "사진 찍기";

      // buttonElement.addEventListener("click", () => {
      //   const img = canvasRef.current.toDataURL("image/jpeg");
      //   setImageList((prev) => [...prev, img]);
      // });

      // document.getElementById("root").appendChild(buttonElement);
      // canvasRef.current.width = video.videoWidth;
      // canvasRef.current.height = video.videoHeight;
      video.play();

      ai(video, canvasRef.current, imageRef.current, (text) => {
        switch (text) {
          case "neutral":
            imageRef.current.src = dgswback;
            break;

          case "angry":
            imageRef.current.src = angryimg;
            break;

          case "disgusted":
            imageRef.current.src = disgustedImg;
            break;

          case "fearful":
            imageRef.current.src = fearImg;
            break;

          case "happy":
            imageRef.current.src = happyImg;
            break;

          case "sad":
            imageRef.current.src = sadimg;
            break;

          case "surprised":
            imageRef.current.src = surprisedImg;
            break;

          default:
        }
      });
    });
  }, []);

  return { imageRef, canvasRef };
};

export default useTakePiture;
