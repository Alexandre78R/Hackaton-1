import { useEffect, useRef, useState } from "react";
import "../Countries.scss";
import heart from "../assets/Vector.png";
import cross from "../assets/croix.png";
import { Link } from "react-router-dom";

function Countries() {
  const [pictures, setPictures] = useState([]);
  const [countries, setCountries] = useState([]);
  const [randomCountry, setRandomCountry] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState([]);
  const [randomIndex, setRandomIndex] = useState();

  const handleclick = () => {
    localStorage.setItem("selectedCountry", selectedCountry);
  };

  const handlePass = () => {
    console.log("index", randomIndex);
    console.log("li", countries[randomIndex]);
    countries.splice(randomIndex, 1);
    setRandomIndex(Math.floor(Math.random() * countries.length));
    setRandomCountry(countries[randomIndex]?.name.common);
  };

  const handleMatch = () => {
    setSelectedCountry([...selectedCountry, randomCountry]);
    setRandomIndex(Math.floor(Math.random() * countries.length));
    countries.splice(randomIndex, 1);
    setRandomCountry(countries[randomIndex]?.name.common);
  };

  useEffect(() => {
    const localRegion = localStorage.getItem("region");
    const dataLocal = JSON.parse(localRegion);
    fetch(" https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((response) => {
        const arr = [];
        for (let i = 0; i < dataLocal.length; i++) {
          const filterRegion = response.filter(
            (e) =>
              e.population >= 10000000 &&
              e.continents[0] === dataLocal[i].region
          );
          arr.push(filterRegion);
        }
        console.log("arr", arr);
        const newArr = [];
        for (let i = 0; i < arr.length; i++) {
          for (let j = 0; j < arr[i].length; j++) {
            newArr.push(arr[i][j]);
          }
        }
        setRandomIndex(Math.floor(Math.random() * newArr.length));
        setCountries(newArr);
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=36297898-b3d4c1f11383451076d6cde52&q=${randomCountry}+travel&image_type=photo&per_page=5`
    )
      .then((response) => response.json())
      .then((response) => {
        setPictures(response.hits);
      })
      .catch((err) => console.error(err));
  }, [randomCountry]);

  useEffect(() => {
    setRandomCountry(countries[randomIndex]?.name?.common);
  }, [countries.length]);

  const divRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      divRef.current.scrollLeft = 0;
    }, 300);
  }, [randomIndex]);

  return (
    <div className="countries-container">
      <h2>Match or Pass</h2>
      <div className="country-card" ref={divRef}>
        {pictures.map((e) => (
          <img src={e.webformatURL} alt="" key={e.id} />
        ))}
      </div>
      <p>{randomCountry}</p>
      <div className="btn-match">
        <div className="pass" onClick={handlePass}>
          <img src={cross} alt="" />
        </div>
        <div className="match" onClick={handleMatch}>
          <img src={heart} alt="" />
        </div>
      </div>
      <Link to="/listCountries">
        <button type="button" onClick={handleclick}>
          Start
        </button>
      </Link>
    </div>
  );
}

export default Countries;
