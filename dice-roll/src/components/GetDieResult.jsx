import React from "react";

import "../App.css";
import d1 from "../assets/images/d1.png";

export default function GetDieResult() {
  return (
    <main>
      <img src={d1} alt="A die displaying 1" className="die"/>
    </main>
  );
}
