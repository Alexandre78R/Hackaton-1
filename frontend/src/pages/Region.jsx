import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../Region.scss";
import africa from "../assets/africa.jpg";
import oceania from "../assets/oceania.jpg";
import america from "../assets/america.jpg";
import asia from "../assets/asia.jpg";
import europe from "../assets/europe.jpg";


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

  useEffect(() => {
    localStorage.setItem("isSelectCountrieMatch", JSON.stringify(false));
  }, []);

  return (
    <div>
      <div className="titleregion">
        <h2>Let's start !</h2>
        <h5>Find your happiness with us</h5>
      </div>
      <div className="containerRegion">
        <div className="container1">
          <button
            className="europe"
            type="button"
            onClick={() => handleClickTheme("Europe")}
          >
            <img
              src={europe}
              alt="europe"
              className="regionImg"
              style={{
                border:
                  selectedRegions.find((name) => name.region === "Europe") !==
                  undefined
                    ? "1px solid "
                    : "",
              }}
            />
            <h3>Europe</h3>
          </button>
          <button
            className="asia"
            type="button"
            onClick={() => handleClickTheme("Asia")}
          >
            <img
              src={asia}
              alt="asia"
              className="regionImg"
              style={{
                border:
                  selectedRegions.find((name) => name.region === "Asia") !==
                  undefined
                    ? "1px solid "
                    : "",
              }}
            />
            <h3>Asia</h3>
          </button>

          <button
            className="oceania"
            type="button"
            onClick={() => handleClickTheme("Oceania")}
          >
            <img
              src={oceania}
              alt="oceania"
              className="regionImg"
              style={{
                border:
                  selectedRegions.find((name) => name.region === "Oceania") !==
                  undefined
                    ? "1px solid "
                    : "",
              }}
            />
            <h3>Oceania</h3>
          </button>
        </div>
        <div className="container1">
          <button type="button" onClick={() => handleClickTheme("Africa")}>
            <img
              src={africa}
              alt="africa"
              className="regionImg"
              style={{
                border:
                  selectedRegions.find((name) => name.region === "Africa") !==
                  undefined
                    ? "1px solid "
                    : "",
              }}
            />
            <h3>Africa</h3>
          </button>

          <button type="button" onClick={() => handleClickTheme("America")}>
            <img
              src={america}
              alt="america"
              className="regionImg"
              style={{
                border:
                  selectedRegions.find((name) => name.region === "America") !==
                  undefined
                    ? "1px solid "
                    : "",
              }}
            />
            <h3>America</h3>
          </button>
        </div>

        <Link to="/Countries">
          <button type="button" className="ExploreBtn">
            Explore
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Region;
