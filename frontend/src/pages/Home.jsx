import { useEffect } from "react";
import { Link } from "react-router-dom";
import "../Home.scss";

function Home() {
  useEffect(() => {
    localStorage.setItem("isSelectCountrieMatch", JSON.stringify(false));
  }, []);

  return (
    <div className="homepage">
      <h1 className="home-title">
        <span>Wonder</span>
        <span>Match</span>
      </h1>
      <h2>Where you off to Next ?</h2>
      <button className="start" type="button">
        <Link to="/region">Get started</Link>
      </button>
    </div>
  );
}

export default Home;
