import React from "react";
import getTunings from "../../tunings";

const Interface = () => {
  return (
    <div>
      <button>Bass Guitar</button>
      <button>Ukelele</button>
      <button>Six String</button>
      <button>Seven String Guitar</button>
      {getTunings("sixString", "E Standard (EADGBE)")}
    </div>
  )
}

export default Interface