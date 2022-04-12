import getFrequency from "./notes-frequencies";

const guitarTunings = {
  bassGuitar: {
    "Standard Bass (EADG)": ["E1", "A1", "D2", "G2"],
    "Drop D (DADG)": ["D1", "A1", "D2", "G2"],
    "D# Standard (D#G#C#F#)": ["D1#", "G1#", "C2#", "F2#"],
    "D Standard (DGCF)": ["D1", "G1", "C2", "F2"],
    "Devils Bass (C#GC#G)": ["C1#", "G1", "C2#", "G2"],
    "C# Standard (C#F#BE)": ["C1#", "F1#", "B1", "E2"],
    "Dead Tuning (DEAD)": ["D1", "E1", "A1", "D2"],
    "Drop F (FCFA#)": ["F1", "C2", "F2", "A2#"],
    "Slipnot Tuning (F#F#BE)": ["F0#", "F1#", "B1", "E2"],
    "C# Variation (C#GCE)": ["C2#", "G2", "C3", "E3"],

  },
  ukulele: {
    "Ukelele GCEA (GCEA)": ["G3", "C3", "E3", "A3"],
    "Open D (DADF#)": ["D3", "A3", "D4", "F4#"],
    "Open C (CGCE)": ["C3", "G3", "C4", "E4"],
    "Open A (AEAC#)": ["A2", "E2", "A3", "C4#"],
    "Open E (EBEG#)": ["E2", "B2", "E3", "G3#"],
    "Asus 4 (AEAD)": ["A2", "E3", "A3", "D4"],
    "Open G (GDGB)": ["G2", "D3", "G3", "B3"],
    "Open B (CF#BD#)": ["B2", "F3#", "B3", "D4#"],
    "Adad Tuning (ADAD)": ["A2", "D3", "A3", "D4"],
    "Open D Minor (DADF)": ["D3", "A3", "D4", "F4"],
  },
  sixString: {
    "E Standard (EADGBE)": ["E2", "A2", "D3", "G3", "B3", "E4"],
    "Drop D (DADGBE)": ["D2", "A2", "D3", "G3", "B3", "E4"],
    "D# Standard": ["D2#", "G2#", "C3#", "F3#", "A3#", "D4#"],
    "D Standard": ["D2", "G2", "C3", "F3", "A3", "D4"],
    "Drop C": ["C2", "G2", "C3", "F3", "A3", "D4"],

  },
  sevenString: {
    "B Standard BEADGBE": ["B1", "E2", "A2", "D3", "G3", "B3", "E4"]
  },
  eightString: {},
};

const getTunings = (guitar, tuning) => {
  const frequencies = []
  for (let frequency of guitarTunings[guitar][tuning]) {
    frequencies.push(`${getFrequency(frequency)}, `)
  }

  return (
    <div>
      <div>
        {tuning}
      </div>
      <div>
        {guitarTunings[guitar][tuning]}
      </div>
      <div>
        {frequencies}
      </div>
    </div>
  )
}

export default getTunings;
