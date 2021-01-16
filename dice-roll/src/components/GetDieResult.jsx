import React, { useState } from "react";

import "../App.css";
import d1 from "../assets/images/d1.png";

export default function GetDieResult() {
  const [dieRollResult, setDieRollResult] = useState(0);

  // Error handling: If there isn't any response from the server return an error

  const checkResponse = (response) => {
    if (!response.ok) throw new Error(`Network error: ${response.status}`);
    return response.json();
  };

  const rollDie = () => {
    fetch("https://rolz.org/api/?d6.json")
      .then(checkResponse)
      .then((result) => {
        console.log(result);
      });
  };

  rollDie();

  return (
    <main>
      <img src={d1} alt="A die displaying 1" className="die" />
    </main>
  );
}
