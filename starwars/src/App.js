import React, { useState, useEffect } from 'react';

import CharacterCard from './components/CharacterCard'
import './App.css';

const App = () => {
  const [starWarsChars, setStarWarsChars] = useState([])

  useEffect(() => {
    fetch("https://swapi.co/api/people")
    .then(res => res.json())
    .then(parsedRes => {
      setStarWarsChars(parsedRes.results)
    })
  }, [])

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>

      {
        (starWarsChars.length)
          ? starWarsChars.map(function renderCharacters(char, i) {
            return <CharacterCard
                      key={i}
                      name={char.name}
                      height={char.height + "\""}
                      mass={char.mass + " kg"}
                      birthYear={char["birth_year"]}
                      hairColor={char["hair_color"]}
                      eyeColor={char["eye_color"]}
                      gender={ (char.gender === 'n/a') ? "robot" : char.gender}
                   />
          })
          : '...Loading'
      }
    </div>
  );
}

export default App;
