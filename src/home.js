import logo from "./logo.svg";
import "./home.css";
import { Link } from "react-router-dom";

function home() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>인테리어ㄱㄱ</p>
        <Link to="/main">Main</Link>
      </header>
    </div>
  );
}

export default home;
