import React from "react";
import { useRecoilState } from "recoil";
import { pictureState } from "../../atom/picture";
import choonsik from "../../assets/template/choonsik.png";
import ryan from "../../assets/result/back/choonsikBack.png";
import kuromi from "../../assets/result/back/kuromiBack.png";
import luffy from "../../assets/result/back/luffyBack.svg";
import luffyChar from "../../assets/result/back/luffyChar.png";
import coex from "../../assets/result/back/coex.png";
import coexBlack from "../../assets/result/back/coexBlack.png";

import styled from "styled-components";
import * as A from "./Adornment.style";

const Adornment = ({ cnt, back, backColor }) => {
  const [imageList] = useRecoilState(pictureState);

  const ReturnImg = (d) => {
    switch (d) {
      case "ryan":
        return ryan;

      case "kuromi":
        return kuromi;

      case "luffy":
        return luffy;

      case "black":
        return coexBlack;

      case "white":
        return coex;

      // case "color":
      //   return color;

      default:
        return ryan;
    }
  };

  return (
    <A.Container>
      {new Array(cnt >= 2 ? 2 : 1).fill(0).map((v, idx) => (
        <A.ImgContainer key={idx} id={idx}>
          {back == "luffy" && (
            <A.TemplateImg id="float" src={luffyChar} alt="" />
          )}
          <A.TemplateImg src={ReturnImg(back)} alt="" />
          {[...imageList, ...imageList].map((v, idx) => (
            <A.PictureImg src={v} index={idx} />
          ))}
        </A.ImgContainer>
      ))}
      <p>{cnt == 4 && "X 2"}</p>
    </A.Container>
  );
};

export default Adornment;
