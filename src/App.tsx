import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Link } from "react-router-dom";
import { AppRoutes } from "./shared/routes.ts";

function App() {
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <Link to={AppRoutes.POSTS} className="card">
        <button>Get Posts</button>
      </Link>
      <Link to={AppRoutes.TASK133} className="card">
        <button>Task_133</button>
      </Link>
      <Link to={AppRoutes.TASK140} className="card">
        <button>Task_140</button>
      <Link to={AppRoutes.TASK138} className="card">
        <button>Task_138</button>
      <Link to={AppRoutes.TASK135} className="card">
        <button>Task_135</button>
      </Link>
      </Link>
    </>
  );
}

export default App;
