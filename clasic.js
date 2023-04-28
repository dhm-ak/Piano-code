// get the button and input elements
const findNextChordBtn = document.querySelector('#input button');
const chordInput = document.querySelector('#input input[type="text"]');

// add a click event listener to the button
findNextChordBtn.addEventListener('click', () => {
  // get the current chord progression from the input element
  const chordProgression = chordInput.value;

  // split the chord progression into an array of chords
  const chords = chordProgression.split(', ');

  // get the last chord in the progression
  const lastChord = chords[chords.length - 1];

  // use a switch statement to get the next chord recommendation based on the last chord in the progression
  let nextChord;
  switch (lastChord) {
    case 'C':
      nextChord = 'G';
      break;
    case 'G':
      nextChord = 'D';
      break;
    case 'D':
      nextChord = 'A';
      break;
    case 'A':
      nextChord = 'E';
      break;
    case 'E':
      nextChord = 'B';
      break;
    case 'B':
      nextChord = 'F#';
      break;
    case 'F#':
      nextChord = 'Db';
      break;
    case 'Db':
      nextChord = 'Ab';
      break;
    case 'Ab':
      nextChord = 'Eb';
      break;
    case 'Eb':
      nextChord = 'Bb';
      break;
    case 'Bb':
      nextChord = 'F';
      break;
    case 'F':
      nextChord = 'C';
      break;
    default:
      nextChord = 'G';
      break;
  }

  // display the next chord recommendation
  const recommendation = document.querySelector('#recommendation p');
  recommendation.textContent = nextChord;
});

    
    
    
    
    
    
    
    
    const chordProgression = { "C": ["G", "Am", "F"],
        "Cm": ["Ab", "Bb", "Eb"],
        "C7": ["F", "G7", "Am"],
        "Cm7": ["Abmaj7", "Bbmaj7", "Eb"],
        "Cmaj7": ["Dm7", "Em7", "Fmaj7"],
        "C#": ["G#", "A#m", "F#"],
        "C#m": ["A", "B", "E"],
        "C#7": ["F#", "G#7", "A#m"],
        "C#m7": ["Amaj7", "Bmaj7", "E"],
        "C#maj7": ["D#m7", "Fm7", "G#maj7"],
        "Db": ["Ab", "Bbm", "Gb"],
        "Dbm": ["A", "B", "E"],
        "Db7": ["Gb", "Ab7", "Bbm"],
        "Dbm7": ["Abmaj7", "Bbmaj7", "Eb"],
        "Dbmaj7": ["Dm7", "Em7", "Fmaj7"],
        "D": ["A", "Bm", "G"],
        "Dm": ["Bb", "C", "F"],
        "D7": ["G", "A7", "Bm"],
        "Dm7": ["Bbmaj7", "Cmaj7", "F"],
        "Dmaj7": ["Em7", "F#m7", "Gmaj7"],
        "D#": ["A#", "Cm", "G#"],
        "D#m": ["B", "C#m", "F#"],
        "D#7": ["G#", "A#7", "Cm"],
        "D#m7": ["Amaj7", "Bmaj7", "E"],
        "D#maj7": ["Fm7", "Gm7", "A#maj7"],
        "Eb": ["Bb", "Cm", "Ab"],
        "Ebm": ["B", "C#m", "F#"],
        "Eb7": ["Ab", "Bb7", "Cm"],
        "Ebm7": ["Bbmaj7", "Cmaj7", "F"],
        "Ebmaj7": ["Fm7", "Gm7", "Abmaj7"],
        "E": ["B", "C#m", "A"],
        "Em": ["B7", "C", "G"],
        "E7": ["A", "B7", "C#m"],
        "Em7": ["Amaj7", "Bmaj7", "E"],
        "Emaj7": ["F#m7", "G#m7", "Amaj7"],
        "F": ["C", "Gm", "Am"],
        "Fm": ["Ab", "Bbm", "Eb"],
        "F7": ["Bb", "C7", "Gm"],
        "Fm7": ["Abmaj7", "Bbmaj7", "Eb"],
        "Fmaj7": ["Gm7", "Am7", "Bbmaj7"],
        "F#": ["C#", "G#m", "A#m"],
        "F#m": ["A", "Bm", "E"],
        "F#7": ["B", "C#7", "G#m"],
        "F#m7": ["Amaj7", "Bmaj7", "E"],
        "F#maj7": ["G#m7", "A#m7", "Bmaj7"],
        "Gb": ["Db", "Ebm", "B"],
        "Gbm": ["D", "Em", "A"],
        "Gb7": ["B", "Db7", "Ebm"],
        "Gbm7": ["Abmaj7", "Bbmaj7", "Db"],
        "Gbmaj7": ["Abm7", "Bbm7", "Cm7"],
        "G": ["D", "Em", "C"],
        "Gm": ["Bb", "Cm", "F"],
        "G7": ["C", "D7", "Em"],
        "Gm7": ["Bbmaj7", "Cmaj7", "F"],
        "Gmaj7": ["Am7", "Bm7", "Cmaj7"],
        "G#": ["D#", "Fm", "C#"],
        "G#m": ["B", "C#m", "F#"],
        "G#7": ["C#", "D#7", "Fm"],
        "G#m7": ["Bmaj7", "C#maj7", "F#"],
        "G#maj7": ["A#m7", "Cm7", "D#maj7"],
        "Ab": ["Eb", "Fm", "Db"],
        "Abm": ["B", "C#m", "F#"],
        "Ab7": ["Db", "Eb7", "Fm"],
        "Abm7": ["Bbmaj7", "Cbmaj7", "Ebm"],
        "Abmaj7": ["Bbm7", "Cm7", "Dm7"],
        "A": ["E", "F#m", "D"],
        "Am": ["C", "Dm", "G"],
        "A7": ["D", "E7", "F#m"],
        "Am7": ["Cmaj7", "Dm7", "G"],
        "Amaj7": ["Bm7", "C#m7", "Dmaj7"],
        "A#": ["F", "Gm", "D#"],
        "A#m": ["C#", "D#m", "G#"],
        "A#7": ["D#", "F7", "Gm"],
        "A#m7": ["C#maj7", "D#maj7", "G#"],
        "A#maj7": ["Cm7", "Dm7", "Fm7"],
        "Bb": ["F", "Gm", "D#"],
        "Bbm": ["C#", "D#m", "G#"],
        "Bb7": ["Eb", "F7", "Gm"],
        "Bbm7": ["Cmaj7", "Dm7", "G"],
        "Bbmaj7": ["Cm7", "Dm7", "Ebmaj7"],
        "B": ["F#", "G#m", "E"],
        "Bm": ["D", "Em", "A"],
        "B7": ["E", "F#7", "G#m"],
        "Bm7": ["Dmaj7", "Emaj7", "A"],
        
    }
  function getSuggestedChord() {
    const input = document.getElementById("chordInput").value.toUpperCase();
    const suggestedChords = chordProgression[input];
    if (suggestedChords) {
      const output = document.getElementById("output");
      output.innerHTML = `<p>Suggested chords:</p><ul>${suggestedChords.map(chord => `<li>${chord}</li>`).join('')}</ul>`;
    } else {
      alert("Invalid chord input. Please enter a valid chord.");
    }
  }
  