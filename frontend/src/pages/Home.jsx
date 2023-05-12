import { Link } from "react-router-dom";
import "../Home.scss";

function Home() {
  return (
    <div>
      <h1 className="home-title">
       <span>Wonder</span><span>Match</span>
      </h1>
      <div className="imgHome">
        <p>
          Partez à l'aventure, que ce soit sur les routes sinueuses d'un road
          trip envoûtant, à la conquête des sommets majestueux de montagnes
          éternelles ou à la découverte des plages de sable fin bordées d'eaux
          cristallines.{" "}
        </p>
      </div>
      <button className="start" type="button">
        <Link to="/region">Start</Link>
      </button>
    </div>
  );
}

export default Home;
