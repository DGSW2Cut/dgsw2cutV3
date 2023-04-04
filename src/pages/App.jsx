import React from "react";
import useTakePiture from "../hooks/useTakePiture";

const App = () => {
  const { canvasRef, imageRef } = useTakePiture();
  return (
    <div>
      <img
        ref={imageRef}
        src=""
        style={{ visibility: "hidden", position: "absolute" }}
      />
      <canvas ref={canvasRef} />
    </div>
  );
};

export default App;
