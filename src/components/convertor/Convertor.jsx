import React from "react";
import Video from "../video/Video";

const Convertor = (str) => {
  let result = null;
  switch (str) {
    case "expression":
      result = <Video />;
      break;

    default:
      break;
  }
  return result;
};

export default Convertor;
