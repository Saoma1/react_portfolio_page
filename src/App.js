import ProjectContainer from "./Projects/ProjectContainer";
import Navbar from "./Navbar/Navbar";
import "./App.css";

function App() {
  return (
    <div className="App flex">
      <Navbar />
      <ProjectContainer title="Projects" />
    </div>
  );
}

export default App;
