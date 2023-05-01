import React, { useEffect, useState } from "react";
import * as R from "./Result.style";
import Adornment from "./Adornment";

const Result = () => {
  const [cnt, setCnt] = useState(2);
  const [back, setBack] = useState("yran");
  const [backColor, setBackColor] = useState();
  const list = ["ryan", "kuromi", "luffy", "black", "white"];

  useEffect(() => {
    // console.log(backColor);
    // document.getElementById("ryan").className = "selected";
  }, []);

  return (
    <R.Result>
      <div>
        <R.PictureContainer>
          <Adornment cnt={cnt} back={back} backColor={backColor} />
        </R.PictureContainer>
        {cnt === 4 && (
          <R.PictureContainer>
            <Adornment cnt={cnt} back={back} backColor={backColor} />
          </R.PictureContainer>
        )}
      </div>
      <R.Split />
      <R.Setting>
        <div id="cnt">
          <h1>1. 수량 선택</h1>
          <div>
            {/*삼항연산자 ? : 안쓰면 에러*/}
            {new Array(2).fill(0).map((v, idx) => (
              <button
                className={cnt === (idx + 1) * 2 ? "selected" : null}
                key={idx}
                onClick={() => {
                  setCnt((idx + 1) * 2);
                }}
              >
                {(idx + 1) * 2}장
              </button>
            ))}
          </div>
        </div>
        <div id="back">
          <h1>2. 배경 선택</h1>
          <div>
            {list.map((i, idx) => (
              <button
                key={i}
                id={i}
                className={back == i ? "selected" : null}
                onClick={() => {
                  setBack(i);
                }}
              ></button>
            ))}

            {/* <input
              type="color"
              id="body"
              name="body"
              // value={`${backColor}`}
              onChange={(e) => {
                setBackColor(e.target.value);
              }}
            />
            <label for="body" id="color"></label> */}
          </div>
        </div>

        <R.Print
          onClick={() => {
            window.print();
          }}
        >
          출력
        </R.Print>
      </R.Setting>
    </R.Result>
  );
};

export default Result;
