import "./App.css";
// import { useNavigate } from "react-router-dom";
import Router from "./navigation/Router";

function App() {
  // const navigate = useNavigate();

  /* const navigateToGraph = () => {
    navigate("/");
  };

  const navigateToTest = () => {
    navigate("/test");
  }; */

  return (
    <div className="App">
      {/* <button type="button" onClick={navigateToGraph}>
        Toggle Graph
      </button>
      <button type="button" onClick={navigateToTest}>
        TEST
  </button> */}
      <main>
        <Router />
      </main>
    </div>
  );
}

export default App;
