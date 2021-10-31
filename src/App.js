import ProjectContainer from "./Projects/ProjectContainer";
import Intro from "./Intro/Intro";
import Navbar from "./Navbar/Navbar";
import "./App.css";

function App() {
  return (
    <div className="App flex">
      <Navbar />
      <Intro />
      <ProjectContainer title="Projects" />
    </div>
  );
}

export default App;
