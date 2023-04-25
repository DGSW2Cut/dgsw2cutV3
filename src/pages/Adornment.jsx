import React from "react";
import { useRecoilState } from "recoil";
import { pictureState } from "../atom/picture";
import choonsik from "../assets/template/choonsik.png";
import styled from "styled-components";

const Adornment = () => {
  const [imageList] = useRecoilState(pictureState);
  return (
    <ImgContainer>
      <TemplateImg src={choonsik} alt="" />
      {[...imageList, ...imageList].map((v, idx) => (
        <PictureImg src={v} index={idx} />
      ))}
    </ImgContainer>
  );
};

export default Adornment;

const ImgContainer = styled.div`
  position: absolute;
  width: 300px;
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
