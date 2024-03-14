import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./page/main.js";
import Home from "./page/home.js";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/main"} element={<Main />} />
          <Route path={"/main"} element={<Home />} />
          <Route path={"/login"} element={<Home />} />
          <Route path={"/register"} element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
