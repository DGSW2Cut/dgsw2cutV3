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
imgElement.onload = () => {
  getCamera().then((video) => {
    const canvas = document.createElement("canvas");
    document.getElementById("root").appendChild(canvas);
    const textELement = document.createElement("h1");
    document.getElementById("root").appendChild(textELement);
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    video.play();
    ai(video, canvas, imgElement, (text) => {
      textELement.innerText = text;
    });
  });
};

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
