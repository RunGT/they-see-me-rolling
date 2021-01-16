import React, { useState, useEffect } from "react";

import "../App.css";
import d1 from "../assets/images/d1.png";
import d2 from "../assets/images/d2.png";
import d3 from "../assets/images/d3.png";
import d4 from "../assets/images/d4.png";
import d5 from "../assets/images/d5.png";
import d6 from "../assets/images/d6.png";

export default function GetDieResult() {
  const [dieRollResult, setDieRollResult] = useState(1);
  const [status, setStatus] = useState("idle");

  const dieImage = () => {
    if (dieRollResult === 1) {
      return <img className="die" src={d1} alt="A die displaying 1" />;
    } else if (dieRollResult === 2) {
      return <img className="die" src={d2} alt="A die displaying 2" />;
    } else if (dieRollResult === 3) {
      return <img className="die" src={d3} alt="A die displaying 3" />;
    } else if (dieRollResult === 4) {
      return <img className="die" src={d4} alt="A die displaying 4" />;
    } else if (dieRollResult === 5) {
      return <img className="die" src={d5} alt="A die displaying 5" />;
    } else if (dieRollResult === 6) {
      return <img className="die" src={d6} alt="A die displaying 6" />;
    }
  };


  useEffect(() => {
    setStatus("fetching");

    fetch("https://rolz.org/api/?d6.json").then(async (res) => {
      if (!res.ok) {
        setStatus("failed");

        throw new Error(`Network error: ${res.status}`);
      }

      const { result } = await res.json();

      setDieRollResult(result);
      setStatus("processed");
    });
  }, []);


  return (
    <main>
      {status === "processed" ? (
        dieImage()
      ) : (
        <p style={{ color: "blue" }}>loading...</p>
      )}
    </main>
  );
}
