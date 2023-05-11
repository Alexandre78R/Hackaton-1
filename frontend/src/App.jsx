import { Routes, Route } from "react-router-dom";
import "./App.scss";
import Countries from "./pages/Countries";
import Home from "./pages/Home";
import Region from "./pages/Region";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/region" element={<Region />} />
        <Route path="/countries" element={<Countries />} />
      </Routes>
    </div>
  );
}

export default App;
