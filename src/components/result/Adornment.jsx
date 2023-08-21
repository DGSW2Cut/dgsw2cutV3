import React, { useMemo } from "react";
import { useRecoilValue } from "recoil";
import { pictureState } from "../../atom/picture";

import ryan from "../../assets/result/back/choonsikBack.png";
import kuromi from "../../assets/result/back/kuromiBack.png";
import luffy from "../../assets/result/back/luffyBack.png";
import luffyChar from "../../assets/result/back/luffyChar.png";
import doguri from "../../assets/result/back/doguriBack.png";
import doguriChar from "../../assets/result/back/doguriChar.png";
import kuromiChar from "../../assets/result/back/kuromiChar.png";
import ryanChar from "../../assets/result/back/choonsikChar.png";
import coex from "../../assets/result/back/Normal.png";
import coexBlack from "../../assets/result/back/Black.png";

import * as A from "./Adornment.style";

/**
 * @param {{cnt: number, back?: "luffy" | "kuromi" | "ryan" | "doguri" | "black" | "white"}}
 * @returns {JSX.Element}
 */
const Adornment = ({ cnt, back }) => {
  const imageList = useRecoilValue(pictureState);
  const BackgroundImg = useMemo(
    () => ({ ryan, kuromi, luffy, doguri, black: coexBlack, white: coex }),
    []
  );

  return (
    <A.Container>
      {new Array(cnt).fill(0).map((_, idx) => (
        <A.ImgContainer key={idx} id={idx}>
          <CharImage back={back} />
          <A.TemplateImg src={BackgroundImg[back] || ryan} alt="template" />
          {[...imageList, ...imageList].map((imageUrl, imgIdx) => (
            <A.PictureImg src={imageUrl} index={imgIdx} key={imgIdx} alt="i" />
          ))}
        </A.ImgContainer>
      ))}
    </A.Container>
  );
};

export default Adornment;

/**
 *
 * @param {{back: string}}
 * @returns {JSX.Element}
 */

const CharImage = ({ back }) => {
  console.log(back);
  let img = undefined;

  switch (back) {
    case "luffy":
      img = luffyChar;
      break;
    case "kuromi":
      img = kuromiChar;
      break;
    case "ryan":
      img = ryanChar;
      break;
    case "doguri":
      img = doguriChar;
      break;
  }

  return <>{<A.TemplateCharImg id={back} src={img} alt="" />}</>;
};
