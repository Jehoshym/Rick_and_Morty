import './App.css'
import Cards from './components/Cards.jsx'
import NavBar from './components/Nav'
import { useState } from 'react'



function App () {
  const [characters, setCharacters] = useState([])
  const onSearch = (character) => {
   fetch(`https://rickandmortyapi.com/api/character/${character}`)
   .then((response) => response.json())
   .then((data) => {
      if (data.name) {
         setCharacters((oldChars) => [...oldChars, data]);
      } else {
         window.alert('No hay personajes con ese ID');
      }
   });
  };
  const onClose = (id) => {
    setCharacters(characters.filter(char => char.id !== id))
  }

  return (
    <div className='App'>
      <NavBar 
        onSearch={onSearch}
      />

      <Cards
        characters={characters}
        onClose={onClose}
      />
    </div>
  )
}

export default App
