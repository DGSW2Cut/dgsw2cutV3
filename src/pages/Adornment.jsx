import React from "react";
import { useRecoilState } from "recoil";
import { pictureState } from "../atom/picture";
import choonsik from "../assets/template/choonsik.png";
import styled from "styled-components";

const Adornment = () => {
  const [imageList] = useRecoilState(pictureState);
  return (
    <Container>
      <ImgContainer>
        <TemplateImg src={choonsik} alt="" />
        {[...imageList, ...imageList].map((v, idx) => (
          <PictureImg src={v} index={idx} />
        ))}
      </ImgContainer>
      <ChooseContainer>
        <NumberContainer>
          <div>1. 수량선택</div>
          {new Array(4).fill(0).map((v) => (
            <div>{v}</div>
          ))}
        </NumberContainer>
      </ChooseContainer>
    </Container>
  );
};

export default Adornment;

const ChooseContainer = styled.div`
  border: 1px solid black;
`;

const NumberContainer = styled.div``;

const Container = styled.div`
  display: grid;
  grid-template-columns: 4fr 3fr;
  width: 100%;
  height: 100vh;
`;

const ImgContainer = styled.div`
  position: relative;
  width: 300px;

  margin: 0 auto;
  transform: translateY(7%);
`;

const TemplateImg = styled.img`
  position: absolute;
  left: 0;
  top: 0;
`;

const PictureImg = styled.img`
  position: absolute;
  left: 50%;
  transform: translate(-40%, 0);
  top: ${({ index }) => `${12 * (index + 1) + index * 180}px`};
  width: 250px;
  height: 180px;
`;
