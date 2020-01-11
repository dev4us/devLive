import React from "react";
import Preview from "./Preview";

function App() {
  return (
    <Preview
      src="http://localhost:8000/live/xbdkj3aimg/index.m3u8"
      controls={true}
      autoplay={false}
    ></Preview>
  );
}

export default App;
