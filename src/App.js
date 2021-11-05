import React, { useState } from "react";
import Navbar from "./Navbar/Navbar";
import Sidebar from "./Sidebar/Sidebar";
import Intro from "./Intro/Intro";
import About from "./About/About";
import ProjectContainer from "./Projects/ProjectContainer";
import Contact from "./Contact/Contact";

function App() {
  const [color, setColor] = useState("#161625");
  // useState(getComputedStyle(document.body).getPropertyValue("--sidebar-color"));

  const handleColorChange = (color) => {
    setColor(color);
  };

  return (
    <div className="App flex">
      <Navbar colorChange={handleColorChange} />
      <Sidebar />
      <Intro mainColor={color} />
      <About />
      <ProjectContainer title="Projects" />
      <Contact />
    </div>
  );
}

export default App;
