import React from "react";
import styled from "styled-components";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { pictureState } from "../atom/picture";
import { useNavigate } from "react-router-dom";
import useTakePiture from "../hooks/useTakePiture";
import { useState } from "react";
import cam1 from "../assets/cam1.png";
import logo from "../assets/logo.png";

const App = () => {
  const navigate = useNavigate();
  const { canvasRef, imageRef } = useTakePiture();
  const [imageList, setImageList] = useRecoilState(pictureState);
  const [, setEnd] = useState(false);

  useEffect(() => {
    if (imageList.length >= 2) {
      setEnd(true);
      navigate("/result");
    } else {
      setEnd(false);
    }
  }, [imageList, navigate]);

  const captureImg = () => {
    const img = canvasRef.current.toDataURL("image/jpeg");
    setImageList((prev) => [...prev, img]);
  };

  return (
    <Container>
      <img src={cam1} alt="카메라 사진" id="cam" />
      <img
        ref={imageRef}
        src=""
        alt="hiddenImage"
        style={{ visibility: "hidden", position: "absolute" }}
      />
      <div id="canvase">
        <canvas ref={canvasRef} style={{ width: 800, height: 600 }} />
      </div>
      <Info>
        <img src={logo} alt="학교 로고" />
        <ButtonContainer>
          <Btn onClick={captureImg}>촬영</Btn>
          <Cnt>{imageList.length} / 2</Cnt>
        </ButtonContainer>
      </Info>
    </Container>
  );
};

export default App;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  width: 1920px;
  height: 1080px;

  canvas {
    border-radius: 30px;
  }

  #cam {
    z-index: 1;
    position: relative;
  }

  #canvase {
    z-index: 2;
    position: absolute;
    top: 360px;
    left: 150px;
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 60vh;
  gap: 30px;
`;
const Btn = styled.button`
  width: 232px;
  height: 166px;
  background-color: #f6cad6;
  /* opacity: 0.5; */
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  border: none;
  color: #000000;

  font-style: normal;
  font-weight: 700;
  font-size: 36px;

  cursor: pointer;
`;

const Cnt = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 232px;
  height: 166px;

  background: #f6cad6;
  /* opacity: 0.5; */
  border-radius: 15px;

  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 44px;
  color: #000000;
`;
