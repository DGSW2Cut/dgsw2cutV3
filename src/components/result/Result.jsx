import React, { useState } from "react";
import * as R from "./Result.style";
import Adornment from "./Adornment";
import { useNavigate } from "react-router-dom";

const Result = () => {
  const navigate = useNavigate();
  const [cnt, setCnt] = useState(2);
  const [back, setBack] = useState("ryan");
  const list = ["ryan", "kuromi", "luffy", "doguri", "black", "white"];

  const Print = () => {
    window.print();
    if (cnt == 4) {
      window.print();
    }
    document.location.href = "/";
    // navigate("/");
  };

  return (
    <R.Result>
      <R.PictureContainer>
        <Adornment cnt={cnt} back={back} />
      </R.PictureContainer>
      <R.SplitContainer>
        <R.Split />
      </R.SplitContainer>
      <R.Setting>
        <div id="cnt">
          <h1>1. 수량 선택</h1>
          <div>
            {new Array(2).fill(0).map((_, idx) => (
              <button
                className={cnt === (idx + 1) * 2 ? "selected" : null}
                key={idx}
                onClick={() => setCnt((idx + 1) * 2)}
              >
                {(idx + 1) * 2}장
              </button>
            ))}
          </div>
        </div>
        <div id="back">
          <h1>2. 배경 선택</h1>
          <div>
            {list.map((i) => (
              <button
                key={i}
                id={i}
                className={back === i && "selected"}
                onClick={() => {
                  setBack(i);
                }}
              ></button>
            ))}
          </div>
        </div>
        <R.Print onClick={() => Print()}>출력</R.Print>
      </R.Setting>
    </R.Result>
  );
};

export default Result;
