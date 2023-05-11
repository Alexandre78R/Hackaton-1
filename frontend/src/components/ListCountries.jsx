import React, { useEffect, useState } from "react";

function ListCountries() {
  const [tabCountrie, setTabCountrie] = useState([]);
  useEffect(() => {
    const data = localStorage.getItem("selectedCountry");
    const jsonData = JSON.parse(data);
    console.log("jsonData", jsonData);
    setTabCountrie(jsonData);
  }, []);

  return (
    <>
      <h1>Your favourite </h1>
      {tabCountrie.map((countrie) => {
        console.log("countrie", countrie);
        return (
          <div className="favpictures">
            <img src={countrie.img[0]?.largeImageURL} alt="" width="80%" />
            <p>
              <img src="../src/assets/localisation.png" alt="" width="20px" />
              {countrie.name}
            </p>
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
    </>
  );
}

export default ListCountries;
