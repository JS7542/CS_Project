import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./ja/main";
import Home from "./ja/home";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/main"} element={<Main />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
