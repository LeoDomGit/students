import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import "./style.css";
import Login from "./pages/Login";

function App() {
  return (
    <div className="App">
              <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />

          </Routes>
        </BrowserRouter>
     

    </div>
  );
}

export default App;
