import "./index.css";
import reportWebVitals from "./reportWebVitals";

// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App";
// import { BrowserRouter } from "react-router-dom";
// import { RecoilRoot } from "recoil";

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(
//   // <React.StrictMode>
//   <RecoilRoot>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </RecoilRoot>
//   // </React.StrictMode>
// );

import backimage from "./assets/dgswback.jpg";
import spongibab from "./assets/spongibab.jpg";
import angryimg from "./assets/angry.jpeg";
import sadimg from "./assets/sad.jpg";
import fearImg from "./assets/fearful.jpg";
import happyImg from "./assets/happy.jpg";
import surprisedImg from "./assets/surprised.jpg";
import disgustedImg from "./assets/disgusted.avif";
import ai from "./ai";

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
        const video = document.createElement("video");
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

const imgElement = document.createElement("img");
imgElement.src = backimage;
const run = getCamera().then((video) => {
  const canvas = document.createElement("canvas");
  document.getElementById("root").appendChild(canvas);
  const buttonElement = document.createElement("button");
  buttonElement.innerText = "사진 찍기";
  const imageList = [];

  buttonElement.addEventListener("click", () => {
    const img = canvas.toDataURL("image/jpeg");
    imageList.push(img);
    console.log(imageList);
  });

  document.getElementById("root").appendChild(buttonElement);
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  video.play();
  ai(video, canvas, imgElement, (text) => {
    switch (text) {
      case "neutral":
        imgElement.src = "";
        break;

      case "angry":
        imgElement.src = angryimg;
        break;

      case "disgusted":
        imgElement.src = disgustedImg;
        break;

      case "fearful":
        imgElement.src = fearImg;
        break;

      case "happy":
        imgElement.src = happyImg;
        break;

      case "sad":
        imgElement.src = sadimg;
        break;

      case "surprised":
        imgElement.src = surprisedImg;
        break;

      default:
    }
  });
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
