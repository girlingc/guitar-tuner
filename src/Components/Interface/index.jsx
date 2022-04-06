import React from "react";
import getFrequency from "../../notes-frequencies";
import getTunings from "../../tunings";

const Interface = () => {
  return (
    <div>
      {getTunings("sixString", "E Standard (EADGBE)")}
    </div>
  )
}

export default Interface