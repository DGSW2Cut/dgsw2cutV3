import { BrowserRouter, Route, Routes } from "react-router-dom";

import Video from "./components/video/Video";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Video />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
