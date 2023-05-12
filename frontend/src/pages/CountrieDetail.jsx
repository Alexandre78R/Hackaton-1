import React, { useEffect, useState } from "react";
import apiChatGPT from "../api/apiChatGPT";
import { useNavigate } from "react-router-dom";

function CountrieDetail() {
  const navigate = useNavigate();
  const [name, setname] = useState("");
  const [activite, setActivite] = useState("");

  useEffect(() => {
    const data = localStorage.getItem("countrieDetail");
    const jsonData = JSON.parse(data);
    setname(jsonData.name);
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
    console.log("api", apiChatGPT.text(name));
  }, [name]);
  return (
    <div className="details">
      <p>{name}</p>
      <p>{activite}</p>
    </div>
  );
}

export default CountrieDetail;
