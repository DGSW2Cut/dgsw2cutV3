import React from "react";
import styled from "styled-components";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { pictureState } from "../atom/picture";
import { useNavigate } from "react-router-dom";
import useTakePiture from "../hooks/useTakePiture";
import { useState } from "react";

const App = () => {
  const navigate = useNavigate();
  const { canvasRef, imageRef } = useTakePiture();
  const [imageList, setImageList] = useRecoilState(pictureState);
  const [end, setEnd] = useState(false);

  useEffect(() => {
    console.log(imageList);
    if (imageList.length >= 2) {
      setEnd(true);
      navigate("/result");
    } else {
      setEnd(false);
    }
  }, [imageList]);

  return (
    <Container>
      <img
        ref={imageRef}
        src=""
        style={{ visibility: "hidden", position: "absolute" }}
      />
      <div>
        <canvas ref={canvasRef} style={{ width: 800, height: 600 }} />
      </div>
      <ButtonContainer>
        <Btn
          onClick={() => {
            const img = canvasRef.current.toDataURL("image/jpeg");
            setImageList((prev) => [...prev, img]);
          }}
        >
          촬영
        </Btn>
        <Cnt>{`${imageList.length} / 2`}</Cnt>
      </ButtonContainer>
    </Container>
  );
};

export default App;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  gap: 30px;

  canvas {
    border-radius: 30px;
  }
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
