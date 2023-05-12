import React, { useEffect, useState } from "react";
import apiChatGPT from "../api/apiChatGPT";
import { useNavigate } from "react-router-dom";

function CountrieDetail() {
  const navigate = useNavigate();
  const [name, setname] = useState("");

  useEffect(() => {
    const data = localStorage.getItem("countrieDetail");
    const jsonData = JSON.parse(data);
    setname(jsonData.name);
    console.log("jsonData", jsonData);
  }, []);

  useEffect(() => {
    // if (name === "") {
    //   navigate("/");
    // } else {
    const api = async (name) => {
      return await apiChatGPT.text(name);
    };
    // console.log("api", api(name));
    Promise.all(
      api(name).then((dataChatGPT) => {
        console.info("dataChatGPT", dataChatGPT.content);
      })
    );
    // }
  }, [name]);
  return (
    <div>
      <p>{name}</p>
    </div>
  );
}

export default CountrieDetail;
