import React from "react";
import getFrequency from "../../notes-frequencies";

const Interface = () => {
  return (
    <div>
      {getFrequency('A2#')}
    </div>
  )
}

export default Interface