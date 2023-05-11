import React from "react";
import "../listCountries.css";

function ListCountries() {
  return (
    <>
      <h1>Your favourite </h1>

      <div className="favpictures">
        <img src="../src/assets/photo1.jpg" alt="" width="80%" />
        <p>
          <img src="../src/assets/localisation.png" alt="" width="20px" />
          Ville, PAYS
        </p>
      </div>
    </>
  );
}

export default ListCountries;
