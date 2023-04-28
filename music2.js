// Define chord progressions object
const chordProgressions = {
    "C": ["Cmaj7", "Am7", "Dm7", "G7", "Bdim7", "A7", "Em7", "Fmaj7", "Cmaj7#11", "C6/9", "Cm(maj7)", "C9(#11)", "C13(#11)"],
"C#": ["C#maj7", "A#m7", "D#m7", "G#7", "C#m7b5", "A#7", "Fm7", "F#maj7", "C#6/9", "C#m(maj7)", "C#9(#11)", "C#13(#11)"],
"D": ["Dmaj7", "Bm7", "Em7", "A7", "D7", "F#m7b5", "Gmaj7", "G7b9", "D9", "D13", "Dadd9", "Dsus4", "D6"],
"D#": ["D#maj7", "Cm7", "Fm7", "G#7", "D#m7b5", "C7", "G#m7", "A#maj7", "D#6/9", "D#m(maj7)", "D#9(#11)", "D#13(#11)"],
"E": ["Emaj7", "C#m7", "F#m7", "B7", "D#dim7", "A#7", "G#m7", "F#maj7", "E6/9", "Ebm7(maj7)", "E9(#11)", "E13(#11)"],
"F": ["Fmaj7", "Dm7", "Gm7", "C7", "D7b9", "EbMaj7#11", "Fm7", "Gbmaj7", "Abmaj7#11", "Bbmaj7#11", "F9", "F11", "F13"],
"F#": ["F#maj7", "D#m7", "G#m7", "C#7", "F#m7b5", "D#7", "A#m7", "Bmaj7", "F#6/9", "F#m(maj7)", "F#9(#11)", "F#13(#11)"],
"G": ["Gmaj7", "Em7", "Am7", "D7", "F#7b9", "Bm7b5", "C#m7b5", "Gm7", "Gmaj7#11", "G7#5b9", "G9", "G11", "G13"],
"G#": ["G#maj7", "Fm7", "Bbm7", "D#7", "G#m7b5", "F7", "Cm7", "C#maj7", "G#6/9", "G#m(maj7)", "G#9(#11)", "G#13(#11)"],
"A": ["Amaj7", "F#m7", "Bm7", "E7", "C#7b9", "F#m7b5", "G#m7b5", "A6", "A9", "A13", "A7sus4", "A6/9", "Aadd9"],
"Gb": ["Gbmaj7", "Ebm7", "Abm7", "Db7", "F7b9", "Bbm7b5", "Cm7b5", "Gb6", "Gb9", "Gb13"],
"G#": ["G#maj7", "Fm7", "Bbm7", "Ebm7b5", "D#7b9", "Gm7b5", "Am7b5", "G#maj7#11", "G#7#5b9", "G#9#11"],
"Ab": ["Abmaj7", "Fm7", "Bbm7", "Eb7", "Gb7b9", "Bm7b5", "Cm7b5", "Abmaj7#11", "Bbm11", "Eb9#11"],
"A#": ["A#maj7", "Gm7", "Cm7", "Fm7", "D#7b9", "G#m7b5", "Am7b5", "A#maj7#11", "A#7#5b9", "A#9#11"],
"Bb": ["Bbmaj7", "Gm7", "Cm7", "F7", "D7b9", "Ebm7b5", "Fm7b5", "Bbmaj7#11", "Cm11", "F9#11"],
"C#": ["C#maj7", "A#m7", "D#m7", "G#7", "F7b9", "Bm7b5", "C#m7b5", "C#maj7#11", "C#7#5b9", "C#9#11"],
"Db": ["Dbmaj7", "Bbm7", "Ebm7", "Ab7", "Gb7b9", "Am7b5", "Bbm7b5", "Dbmaj7#11", "Ebm11", "Ab9#11"],
"D#": ["D#maj7", "Cm7", "Fm7", "G#m7", "D#7b9", "Gm7b5", "A#m7b5", "D#maj7#11", "D#7#5b9", "D#9#11"],
"Eb": ["Ebmaj7", "Cm7", "Fm7", "Bb7", "Ab7b9", "Bbm7b5", "Cm7b5", "Ebmaj7#11", "Fm11", "Bb9#11"],
"F#": ["F#maj7", "D#m7", "G#m7", "C#7", "B7b9", "Em7b5", "F#m7b5", "F#maj7#11", "F#7#5b9", "F#9#11"],


}    
    // Add more keys and progressions as needed
  
  
  // Get DOM elements
  const keyInput = document.getElementById("key-input");
  const findButton = document.getElementById("find-button");
  const progressionsList = document.getElementById("progressions-list");
  
  // Add event listener to find button
  findButton.addEventListener("click", findProgressions);
  
  // Function to find chord progressions
  function findProgressions() {
    // Get user input
    const key = keyInput.value.toUpperCase();
  
    // Get chord progressions for key from object
    const progressions = chordProgressions[key];
  
    // Clear previous results
    progressionsList.innerHTML = "";
  
    // Loop through progressions and add each one to the list
    progressions.forEach(progression => {
      const li = document.createElement("li");
      li.textContent = progression;
      progressionsList.appendChild(li);
    });
  }
  