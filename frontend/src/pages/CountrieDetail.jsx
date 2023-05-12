import React, { useEffect, useState } from "react";
import apiChatGPT from "../api/apiChatGPT";
import { useNavigate } from "react-router-dom";
function CountrieDetail() {
  const navigate = useNavigate();
  const [name, setname] = useState("");
  const [img, setimg] = useState("");
  const [activite, setActivite] = useState("");
  useEffect(() => {
    const data = localStorage.getItem("countrieDetail");
    const jsonData = JSON.parse(data);
    setname(jsonData.name);
    setimg(jsonData.img[0]["webformatURL"]);
    console.log("jsonData", jsonData);
  }, []);
  useEffect(() => {
    const api = (name) => {
      return apiChatGPT(name);
    };
    Promise.all(
      api(name).then((dataChatGPT) => {
        console.info("dataChatGPT", dataChatGPT.content);
        setActivite(dataChatGPT.content);
      })
    );
    // }
  }, [name]);

  useEffect(() => {
    console.log(activite.split(/\n/g));
  }, [activite]);
  return (
    <div className="details">
      <p className="countryfav">{name}</p>
      <img src={img} alt="" className="imgfav" />
      <div className="activities">
        <p>Activités :</p>
        {activite.split(/\n/g).map((e) => {
          return <p>{e}</p>;
        })}
      </div>
    </div>
  );
}
export default CountrieDetail;
