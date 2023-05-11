import { useEffect, useState } from "react";
import "../Countries.scss";
import heart from "../assets/Vector.png";
import cross from "../assets/croix.png";

function Countries() {
  const [pictures, setPictures] = useState([]);
  const [countries, setCountries] = useState([]);
  const [randomCountry, setRandomCountry] = useState([]);

  useEffect(() => {
    fetch(" https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((response) => {
        setCountries(response);
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=36297898-b3d4c1f11383451076d6cde52&q=${randomCountry}+tourism&image_type=photo&per_page=5`
    )
      .then((response) => response.json())
      .then((response) => {
        setPictures(response.hits);
      })
      .catch((err) => console.error(err));
  }, [randomCountry]);

  useEffect(() => {
    setRandomCountry(
      countries[Math.floor(Math.random() * countries.length)]?.name.common
    );
  }, [countries.length]);

  useEffect(() => {
    console.warn(randomCountry);
  }, [randomCountry]);

  return (
    <div className="countries-container">
      <h2>Match or pass</h2>
      <div className="country-card">
        {pictures.map((e) => (
          <img src={e.webformatURL} alt="" key={e.id} />
        ))}
      </div>
      <p>{randomCountry}</p>
      <div className="btn-match">
        <div className="pass">
          <img src={cross} alt="" />
        </div>
        <div className="match">
          <img src={heart} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Countries;
