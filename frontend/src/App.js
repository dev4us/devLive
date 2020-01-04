import React from "react";
import Preview from "./Preview";

function App() {
  return (
    <Preview
      src="http://localhost:8000/live/dev4us/index.m3u8"
      controls={true}
      autoplay={true}
    ></Preview>
  );
}

export default App;
