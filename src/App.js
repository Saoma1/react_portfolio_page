import ProjectContainer from "./Projects/ProjectContainer";
import Theme from "./Navbar/Theme";
import "./App.css";

function App() {
  return (
    <div className="App flex">
      <Theme />
      <ProjectContainer title="Projects" />
    </div>
  );
}

export default App;
