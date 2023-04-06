import React from "react";
import * as R from "./Result.style";

const Result = () => {
  return (
    <R.Result>
      <R.PictureContainer></R.PictureContainer>
      <R.Split />
      <R.Setting>
        <div id="cnt">
          <h1>1. 수량 선택</h1>
          <div>
            <button>1장</button>
            <button>2장</button>
            <button>3장</button>
            <button>4장</button>
          </div>
        </div>

        <div id="back">
          <h1>2. 배경 선택</h1>
          <div>
            <button id="ryan"></button>
            <button id="kuromi"></button>
            <button id="luffy"></button>
            <button id="black"></button>
            <button id="white"></button>
            <button id="color"></button>
          </div>
        </div>

        <R.Print>출력</R.Print>
      </R.Setting>
    </R.Result>
  );
};

export default Result;
