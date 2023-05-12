import { Routes, Route } from "react-router-dom";
import "./listCountries.css";
import Countries from "./pages/Countries";
import Home from "./pages/Home";
import Region from "./pages/Region";
import ListCountries from "./components/ListCountries";
import CountrieDetail from "./pages/CountrieDetail";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/region" element={<Region />} />
        <Route path="/countries" element={<Countries />} />
        <Route path="/listCountries" element={<ListCountries />} />
        <Route path="/countrieDetail" element={<CountrieDetail />} />
      </Routes>
    </div>
  );
}

export default App;
