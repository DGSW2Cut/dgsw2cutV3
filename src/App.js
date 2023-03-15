import { BrowserRouter, Route, Routes } from "react-router-dom";

import Video from "./components/video/Video";
import Home from "./components/home/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Video />} />
        <Route path="/result" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
