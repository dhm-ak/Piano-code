// Define chord progressions object
const chordProgressions = {
	"C": ["C6/9", "Cmaj7#5#9", "Cmaj7b5#11", "C13b5#9", "C9#5b9b13", "C7#5#9b13", "C7b5b9#9", "C7#9b5#9", "C7b5#5b9", "C7#5#9b5", "C7#5b9b5", "C7b5#5#9", "C7b5b9b5", "C7#5b9#9", "C7#5b9b5#9"],
				"C#": ["C#6/9", "C#maj7#5#9", "C#maj7b5#11", "C#13b5#9", "C#9#5b9b13", "C#7#5#9b13", "C#7b5b9#9", "C#7#9b5#9", "C#7b5#5b9", "C#7#5#9b5", "C#7#5b9b5", "C#7b5#5#9", "C#7b5b9b5", "C#7#5b9#9", "C#7#5b9b5#9"],
				"D": ["D6/9", "Dmaj7#5#9", "Dmaj7b5#11", "D13b5#9", "D9#5b9b13", "D7#5#9b13", "D7b5b9#9", "D7#9b5#9", "D7b5#5b9", "D7#5#9b5", "D7#5b9b5", "D7b5#5#9", "D7b5b9b5", "D7#5b9#9", "D7#5b9b5#9"],
				"D#": ["D#6/9", "D#maj7#5#9", "D#maj7b5#11", "D#13b5#9", "D#9#5b9b13", "D#7#5#9b13", "D#7b5b9#9", "D#7#9b5#9", "D#7b5#5b9", "D#7#5#9b5", "D#7#5b9b5", "D#7b5#5#9", "D#7b5b9b5", "D#7#5b9#9", "D#7#5b9b5#9"],
				"E": ["E6/9", "Emaj7#5#9", "Emaj7b5#11", "E13b5#9", "E9#5b9b13", "E7#5#9b13", "E7b5b9#9", "E7#9b5#9", "E7b5#5b9", "E7#5#9b5", "E7#5b9b5", "E7b5#5#9", "E7b5b9b5", "E7#5b9#9", "E7#5b9b5#9"],
				"F": ["F6/9", "Fmaj7#5#9", "Fmaj7b5#11", "F13b5#9", "F9#5b9b13", "F7#5#9b13", "F7b5b9#9", "F7#9b5#9", "F7b5#5b9", "F7#5#9b5", "F7#5b9b5", "F7b5#5#9", "F7b5b9b5", "F7#5b9#9", "F7#5b9b5#9"],
				"F#": ["F#6/9", "F#maj7#5#9", "F#maj7b5#11", "F#13b5#9", "F#9#5b9b13", "F#7#5#9b13", "F#7b5b9#9", "F#7#9b5#9", "F#7b5#5b9", "F#7#5#9b5", "F#7#5b9b5", "F#7b5#5#9", "F#7b5b9b5", "F#7#5b9#9", "F#7#5b9b5#9"],
				"G": ["G6/9", "Gmaj7#5#9", "Gmaj7b5#11", "G13b5#9", "G9#5b9b13", "G7#5#9b13", "G7b5b9#9", "G7#9b5#9", "G7b5#5b9", "G7#5#9b5", "G7#5b9b5", "G7b5#5#9", "G7b5b9b5", "G7#5b9#9", "G7#5b9b5#9"],
				"G#": ["G#6/9", "G#maj7#5#9", "G#maj7b5#11", "G#13b5#9", "G#9#5b9b13", "G#7#5#9b13", "G#7b5b9#9", "G#7#9b5#9", "G#7b5#5b9", "G#7#5#9b5", "G#7#5b9b5", "G#7b5#5#9", "G#7b5b9b5", "G#7#5b9#9", "G#7#5b9b5#9"],
				"A": ["A6/9", "Amaj7#5#9", "Amaj7b5#11", "A13b5#9", "A9#5b9b13", "A7#5#9b13", "A7b5b9#9", "A7#9b5#9", "A7b5#5b9", "A7#5#9b5", "A7#5b9b5", "A7b5#5#9", "A7b5b9b5", "A7#5b9#9", "A7#5b9b5#9"],
				"A#": ["A#6/9", "A#maj7#5#9", "A#maj7b5#11", "A#13b5#9", "A#9#5b9b13", "A#7#5#9b13", "A#7b5b9#9", "A#7#9b5#9", "A#7b5#5b9", "A#7#5#9b5", "A#7#5b9b5", "A#7b5#5#9", "A#7b5b9b5", "A#7#5b9#9", "A#7#5b9b5#9"],
				"B": ["B6/9", "Bmaj7#5#9", "Bmaj7b5#11", "B13b5#9", "B9#5b9b13", "B7#5#9b13", "B7b5b9#9", "B7#9b5#9", "B7b5#5b9", "B7#5#9b5", "B7#5b9b5", "B7b5#5#9", "B7b5b9b5", "B7#5b9#9", "B7#5b9b5#9"]
			
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
  