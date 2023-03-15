import React, { useState } from "react";
import Convertor from "../convertor/Convertor";
import * as M from "./Homee.style";

const Main = () => {
  const [background, setBackground] = useState("expression");
  const clickHandler = (str) => {};

  return (
    <M.Wrapper>
      <M.CamWrapper>{Convertor(background)}</M.CamWrapper>
      <M.ButtonWrapper>
        <M.Header>
          <M.HeaderImg
            src={
              "https://raw.githubusercontent.com/DGSW2Cut/dgsw2cut/main/v2/src/assets/logo.png?token=GHSAT0AAAAAABYCSGPYM2ZK5G4WOZRUF4UKZARCO2Q"
            }
          ></M.HeaderImg>
          <M.Title>인생두컷</M.Title>
        </M.Header>
        <M.Button onClick={() => clickHandler("lupi")}>잔망루피</M.Button>
        <M.Button onClick={() => clickHandler("spongibab")}>스폰지밥</M.Button>
        <M.Button onClick={() => clickHandler("playGroundImg")}>
          학교 운동장
        </M.Button>
        <M.Button onClick={() => clickHandler("schoolFrontImg")}>
          학교 기숙사동 정문
        </M.Button>
        <M.Button onClick={() => clickHandler("schoolBackImg")}>
          학교 크로마키
        </M.Button>
        <M.TakeButton onClick={() => {}}>사진 찍기</M.TakeButton>
      </M.ButtonWrapper>
    </M.Wrapper>
  );
};

export default Main;
