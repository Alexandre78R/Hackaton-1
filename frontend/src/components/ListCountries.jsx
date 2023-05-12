import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import arrow from "../assets/arrow.png";

function ListCountries() {
  // const [img, setImg] = useState("");
  // const [name, setName] = useState("");
  const [tabCountrie, setTabCountrie] = useState([]);
  useEffect(() => {
    const data = localStorage.getItem("selectedCountry");
    const jsonData = JSON.parse(data);
    console.log("jsonData", jsonData);
    setTabCountrie(jsonData);
    //   setImg(jsonData.img[0]);
    //   setName(jsonData.name);
  }, []);

  return (
    <div className="favourites">
      <h1>Your favourites</h1>
      {tabCountrie.map((countrie) => {
        console.log("countrie", countrie);
        return (
          <div className="favpictures">
            <img src={countrie.img[0]?.largeImageURL} alt="" width="80%" />
            <p>{countrie.name}</p>
          </div>
        );
      })}
      {/* <div className="favpictures">
        <img src="../src/assets/photo1.jpg" alt="" width="80%" />
        <p>
          <img src="../src/assets/localisation.png" alt="" width="20px" />
          Ville, PAYS
        </p>
      </div> */}
      <Link to="/countries">
        <div className="go-back">
          <img src={arrow} alt="" />
        </div>
      </Link>
    </div>
  );
}

export default ListCountries;
