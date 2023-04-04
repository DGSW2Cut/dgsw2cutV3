import React from "react";
import { useRecoilState } from "recoil";
import { pictureState } from "../atom/picture";

const Adornment = () => {
  const [imageList] = useRecoilState(pictureState);
  return (
    <div>
      {imageList.map((v) => (
        <img src={v} />
      ))}
    </div>
  );
};

export default Adornment;
