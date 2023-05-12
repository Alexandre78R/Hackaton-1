import { useEffect, useRef, useState } from "react";
import "../Countries.scss";
import heart from "../assets/Vector.png";
import cross from "../assets/croix.png";
import list from "../assets/list.png";
import { Link } from "react-router-dom";

function Countries() {
  const [pictures, setPictures] = useState([]);
  const [countries, setCountries] = useState([]);
  const [randomCountry, setRandomCountry] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState([]);
  const [randomIndex, setRandomIndex] = useState();

  const handleclick = () => {
    console.log("selectedCountry", selectedCountry);
    localStorage.setItem("selectedCountry", JSON.stringify(selectedCountry));
    // const isSelectCountrieMatch = localStorage.getItem("isSelectCountrieMatch");
    // if (!JSON.parse(isSelectCountrieMatch)) {
    //   localStorage.setItem("selectedCountry", JSON.stringify(selectedCountry));
    //   localStorage.setItem("isSelectCountrieMatch", JSON.stringify(true));
    //   localStorage.setItem("sauvDataCountry", JSON.stringify(countries));
    // } else {
    //   const dataSelectCountry = localStorage.getItem("selectedCountry");
    //   const jsonDataSelectCountry = JSON.parse(dataSelectCountry);
    //   const tabNewDataselectedCountry = [];
    //   for (let i = 0; i < jsonDataSelectCountry.length; i++) {
    //     tabNewDataselectedCountry.push(jsonDataSelectCountry[i]);
    //   }
    //   for (let i = 0; i < selectedCountry.length; i++) {
    //     tabNewDataselectedCountry.push(selectedCountry[i]);
    //   }
    //   localStorage.setItem(
    //     "selectedCountry",
    //     JSON.stringify(tabNewDataselectedCountry)
    //   );
    //   localStorage.setItem("sauvDataCountry", JSON.stringify(countries));
    // }
  };

  const handlePass = () => {
    console.log("index", randomIndex);
    console.log("li", countries[randomIndex]);
    countries.splice(randomIndex, 1);
    setRandomIndex(Math.floor(Math.random() * countries.length));
    setRandomCountry(countries[randomIndex]?.name.common);
  };

  const handleMatch = () => {
    setSelectedCountry([
      ...selectedCountry,
      { name: randomCountry, img: pictures },
    ]);
    setRandomIndex(Math.floor(Math.random() * countries.length));
    countries.splice(randomIndex, 1);
    setRandomCountry(countries[randomIndex]?.name.common);
  };

  useEffect(() => {
    // setCountries([]);
    // setTimeout(() => {
    //   const isSelectCountrieMatch = localStorage.getItem(
    //     "isSelectCountrieMatch"
    //   );
    //   if (!JSON.parse(isSelectCountrieMatch)) {
    //     const localRegion = localStorage.getItem("region");
    //     const dataLocal = JSON.parse(localRegion);
    //     fetch(" https://restcountries.com/v3.1/all")
    //       .then((response) => response.json())
    //       .then((response) => {
    //         const arr = [];
    //         for (let i = 0; i < dataLocal.length; i++) {
    //           const filterRegion = response.filter(
    //             (e) =>
    //               e.population >= 10000000 &&
    //               e.continents[0] === dataLocal[i].region
    //           );
    //           arr.push(filterRegion);
    //         }
    //         console.log("arr", arr);
    //         const newArr = [];
    //         for (let i = 0; i < arr.length; i++) {
    //           for (let j = 0; j < arr[i].length; j++) {
    //             newArr.push(arr[i][j]);
    //           }
    //         }
    //         setRandomIndex(Math.floor(Math.random() * newArr.length));
    //         setCountries(newArr);
    //       })
    //       .catch((err) => console.error(err));
    //   } else {
    //     const sauvDataCountry = localStorage.getItem("sauvDataCountry");
    //     const jsonSauvDataCountry = JSON.parse(sauvDataCountry);
    //     console.log("jsonSauvDataCountry", jsonSauvDataCountry);
    //     setCountries(jsonSauvDataCountry);
    //   }
    // }, 300);
    const localRegion = localStorage.getItem("region");
    const dataLocal = JSON.parse(localRegion);
    console.warn(dataLocal);
    fetch(" https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((response) => {
        const arr = [];
        for (let i = 0; i < dataLocal.length; i++) {
          const filterRegion = response.filter(
            (e) =>
              e.population >= 10000000 &&
              e.continents[0].includes(dataLocal[i].region)
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
      `https://pixabay.com/api/?key=36297898-b3d4c1f11383451076d6cde52&q=${randomCountry}&image_type=photo&per_page=5`
    )
      .then((response) => response.json())
      .then((response) => {
        setPictures(response.hits);
      })
      .catch((err) => console.error(err));
  }, [randomCountry]);

  useEffect(() => {
    // const isSelectCountrieMatch = localStorage.getItem("isSelectCountrieMatch");
    // if (!JSON.parse(isSelectCountrieMatch)) {
    //   setRandomCountry(countries[randomIndex]?.name?.common);
    // } else {
    //   const sauvDataCountry = localStorage.getItem("sauvDataCountry");
    //   const jsonSauvDataCountry = JSON.parse(sauvDataCountry);
    //   // console.log(
    //   //   "jsonSauvDataCountry useEffect countries.length",
    //   //   jsonSauvDataCountry
    //   // );
    //   // setRandomCountry(jsonSauvDataCountry[randomIndex]?.name?.common);
    // }
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
        {Boolean(countries.length) ? (
          pictures?.map((e) => (
            <div
              style={{ backgroundImage: `url(${e.webformatURL})` }}
              key={e.id}
            />
          ))
        ) : (
          <p>Sorry, no more country available</p>
        )}
      </div>
      <p>{randomCountry}</p>
      <div className="btn-match">
        <div className="pass" onClick={handlePass}>
          <img src={cross} alt="" />
        </div>
        <Link to="/listCountries">
          <button type="button" onClick={handleclick}>
            <img src={list} alt="" />
          </button>
        </Link>
        <div className="match" onClick={handleMatch}>
          <img src={heart} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Countries;
