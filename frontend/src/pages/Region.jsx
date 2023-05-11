import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Region() {
  const [selectedRegions, setSelectedRegions] = useState([]);

  const handleClickTheme = (name) => {
    const searchSelectRegion = selectedRegions.find((e) => e.region === name);
    if (searchSelectRegion !== undefined) {
      setSelectedRegions((prevState) => [
        ...prevState.filter((theme) => theme.region !== name),
      ]);
      return;
    }
    setSelectedRegions((prevState) => [...prevState, { region: name }]);
  };

  useEffect(() => {
    console.info("selectedRegions", selectedRegions);
  }, [selectedRegions]);

  const handleclick = () => {
    localStorage.setItem("region", JSON.stringify(selectedRegions));
  };

  return (
    <div>
      <button
        type="button"
        onClick={() => handleClickTheme("Europe")}
        style={{
          backgroundColor:
            selectedRegions.find((name) => name.region === "Europe") !==
            undefined
              ? "Red"
              : "gray",
        }}
      >
        Europe
      </button>
      <button
        type="button"
        onClick={() => handleClickTheme("Asia")}
        style={{
          backgroundColor:
            selectedRegions.find((name) => name.region === "Asia") !== undefined
              ? "Red"
              : "gray",
        }}
      >
        Asia
      </button>
      <button
        type="button"
        onClick={() => handleClickTheme("Oceania")}
        style={{
          backgroundColor:
            selectedRegions.find((name) => name.region === "Oceania") !==
            undefined
              ? "Red"
              : "gray",
        }}
      >
        Oceania
      </button>
      <button
        type="button"
        onClick={() => handleClickTheme("Africa")}
        style={{
          backgroundColor:
            selectedRegions.find((name) => name.region === "Africa") !==
            undefined
              ? "Red"
              : "gray",
        }}
      >
        Africa
      </button>
      <button
        type="button"
        onClick={() => handleClickTheme("America")}
        style={{
          backgroundColor:
            selectedRegions.find((name) => name.region === "America") !==
            undefined
              ? "Red"
              : "gray",
        }}
      >
        America
      </button>
      <p>Sélection : </p>
      {selectedRegions.map((region) => {
        return <h1 key={region.region}> {region.region}</h1>;
      })}
      <Link to="/countries">
        <button type="button" onClick={handleclick}>
          Start
        </button>
      </Link>
    </div>
  );
}

export default Region;
