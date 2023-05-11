import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Region from "./pages/Region";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/region" element={<Region />} />
      </Routes>
    </div>
  );
}

export default App;
