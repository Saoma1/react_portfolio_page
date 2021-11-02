import ProjectContainer from "./Projects/ProjectContainer";
import React, { useState } from "react";
import Intro from "./Intro/Intro";
import Navbar from "./Navbar/Navbar";
import "./App.css";

function App() {
  const [color, setColor] = useState("#66bb6a");
  // useState(getComputedStyle(document.body).getPropertyValue("--sidebar-color"));

  const handleColorChange = (color) => {
    setColor(color);
  };

  return (
    <div className="App flex">
      <Navbar colorChange={handleColorChange} />
      <Intro mainColor={color} />
      <ProjectContainer title="Projects" />
    </div>
  );
}

export default App;
