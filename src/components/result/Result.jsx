import React, { useState } from "react";
import * as R from "./Result.style";

const Result = () => {
  const [cnt, setCnt] = useState(1);
  const [back, setBack] = useState("yran");

  return (
    <R.Result>
      <R.PictureContainer></R.PictureContainer>
      <R.Split />
      <R.Setting>
        <div id="cnt">
          <h1>1. 수량 선택</h1>
          <div>
            {/*삼항연산자 ? : 안쓰면 에러*/}
            <button
              className={cnt === 1 ? "selected" : null}
              onClick={() => {
                setCnt(1);
              }}
            >
              1장
            </button>
            <button
              className={cnt === 2 ? "selected" : null}
              onClick={() => {
                setCnt(2);
              }}
            >
              2장
            </button>
            <button
              className={cnt === 3 ? "selected" : null}
              onClick={() => {
                setCnt(3);
              }}
            >
              3장
            </button>
            <button
              className={cnt === 4 ? "selected" : null}
              onClick={() => {
                setCnt(4);
              }}
            >
              4장
            </button>
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
