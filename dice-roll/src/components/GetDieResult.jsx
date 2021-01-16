import React, { useState } from "react";

import "../App.css";
import d1 from "../assets/images/d1.png";

export default function GetDieResult() {

    const [dieRollResult, setDieRollResult] = useState(0);

    const checkResponse = (response) => {
        if (!response.ok) throw new Error(`Network error: ${response.status}`);
        return response.json();
    }


    
  return (
    <main>
      <img src={d1} alt="A die displaying 1" className="die"/>
    </main>
  );
}
