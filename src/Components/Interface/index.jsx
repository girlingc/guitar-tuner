import React from "react";
import notesFrequency from "../../notes-frequencies";

const getFrequency = (note) => {
  return notesFrequency[note]
}

const Interface = () => {
  return (
    <div>
      {getFrequency('A2')}
    </div>
  )
}

export default Interface