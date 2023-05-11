import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <p>toto</p>
      <Link to="/region">
        <button type="button">Start</button>
      </Link>
    </div>
  );
}

export default Home;
