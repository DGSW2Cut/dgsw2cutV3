import React from "react";
import styled from "styled-components";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { pictureState } from "../atom/picture";
import { useNavigate } from "react-router-dom";
import useTakePiture from "../hooks/useTakePiture";
import { useState } from "react";
import logo from "../assets/logo.png";

const App = () => {
  const navigate = useNavigate();
  const [countCamera, setCountCamera] = useState(3);
  const [viewCount, setViewCount] = useState(3);
  const [isCapture, setIsCapture] = useState(false);
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
    setIsCapture(true);
    for (let i = 1, j = countCamera - 1; i < countCamera; i++, j--) {
      setTimeout(() => {
        setViewCount(j);
      }, 1000 * i);
    }
    setTimeout(() => {
      const img = canvasRef.current.toDataURL("image/jpeg");
      setImageList((prev) => [...prev, img]);
      setIsCapture(false);
      setViewCount(countCamera);
    }, 1000 * countCamera);
  };

  return (
    <>
      {isCapture && (
        <p
          style={{
            position: "absolute",
            width: "100%",
            textAlign: "center",
            paddingTop: "1rem",
            zIndex: 1,
          }}
        >
          <span
            style={{
              padding: "1rem",
              borderRadius: "15px",
              backgroundColor: "#f6cad6",
              color: "white",
              fontSize: "2rem",
            }}
          >
            {viewCount}
          </span>
        </p>
      )}
      <MainContainer>
        <img
          src={logo}
          alt="학교 로고"
          style={{ width: "10rem", position: "fixed", bottom: 50, left: 40 }}
        />
        <ImageContainer>
          <div style={{ width: "44%" }}>
            <img
              ref={imageRef}
              src=""
              alt="hiddenImage"
              style={{ visibility: "hidden", position: "absolute" }}
            />
            <div id="canvase">
              <canvas
                ref={canvasRef}
                style={{ width: "100%", borderRadius: "10px" }}
              />
            </div>
            <p style={{ textAlign: "center" }}>
              <p>표정에 따라 배경이 바뀌어요</p>
              <>
                <CaptureButton onClick={captureImg} disabled={isCapture}>
                  촬영
                </CaptureButton>
                <>
                  <TimerBtn
                    isActive={countCamera === 3}
                    onClick={() => {
                      setCountCamera(3);
                      setViewCount(3);
                    }}
                    disabled={isCapture}
                  >
                    3초
                  </TimerBtn>
                  <TimerBtn
                    isActive={countCamera === 5}
                    onClick={() => {
                      setCountCamera(5);
                      setViewCount(5);
                    }}
                    disabled={isCapture}
                  >
                    5초
                  </TimerBtn>
                </>
              </>
            </p>
          </div>
          <PreviewImageContainer>
            <p>사진 미리보기</p>
            <PreviewImage image={imageList[0]} />
            <PreviewImage image={imageList[1]} />
          </PreviewImageContainer>
        </ImageContainer>
      </MainContainer>
    </>
  );
};

export default App;

const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
`;

const PreviewImage = styled.div`
  width: 20rem;
  margin: 1rem;
  height: 15rem;
  background: ${(props) => (props.image ? `url(${props.image})` : "white")};
  background-size: cover;
  border: ${(props) => (props.image ? "none" : "1px solid #A8A8A8")};
  border-radius: 10px;
`;
const PreviewImageContainer = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 5rem;
`;

const ImageContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  padding-top: 6rem;
`;

const CaptureButton = styled.button`
  box-shadow: none;
  margin: 1rem auto;
  padding: 2.25rem 3.25rem;
  border-radius: 10px;
  border: 1px solid #a8a8a8;
  font-size: 2rem;
  font-weight: 600;
  background-color: white;
  &:hover {
    background-color: #ffe2ea;
  }
  &:active {
    background-color: #f6cad6;
  }
`;

const TimerBtn = styled.button`
  margin-left: 1rem;
  padding: 1rem;
  font-size: 1rem;
  box-shadow: none;
  background-color: ${(props) => (props.isActive ? "#f6cad6" : "white")};
  color: ${(props) => (props.isActive ? "white" : "#f6cad6")};
  border: ${(props) => (props.isActive ? "none" : "1px solid #f6cad6")};
  border-radius: 10px;
`;
