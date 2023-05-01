import React, { useMemo } from "react";
import { useRecoilState } from "recoil";
import { pictureState } from "../../atom/picture";

import ryan from "../../assets/result/back/choonsikBack.png";
import kuromi from "../../assets/result/back/kuromiBack.png";
import luffy from "../../assets/result/back/luffyBack.svg";
import luffyChar from "../../assets/result/back/luffyChar.png";
import coex from "../../assets/result/back/coex.png";
import coexBlack from "../../assets/result/back/coexBlack.png";

import * as A from "./Adornment.style";

/**
 * @param {{cnt: number, back?: "luffy" | "kuromi" | "ryan" | "black" | "white"}}
 * @returns {JSX.Element}
 */
const Adornment = ({ cnt, back }) => {
  const [imageList] = useRecoilState(pictureState);
  const BackgroundImg = useMemo(
    () => ({ ryan, kuromi, luffy, black: coexBlack, white: coex }),
    []
  );

  return (
    <A.Container>
      {new Array(2).fill(0).map((_, idx) => (
        <A.ImgContainer key={idx} id={idx}>
          <IsLuffyImage back={back} />
          <A.TemplateImg src={BackgroundImg[back] || ryan} alt="template" />
          {[...imageList, ...imageList].map((imageUrl, imgIdx) => (
            <A.PictureImg src={imageUrl} index={imgIdx} key={imgIdx} alt="i" />
          ))}
        </A.ImgContainer>
      ))}
      {cnt === 4 && <p>X 2</p>}
    </A.Container>
  );
};

export default Adornment;

/**
 *
 * @param {{back: string}}
 * @returns {JSX.Element}
 */
const IsLuffyImage = ({ back }) => {
  return (
    <>
      {back === "luffy" && <A.TemplateImg id="float" src={luffyChar} alt="" />}
    </>
  );
};
