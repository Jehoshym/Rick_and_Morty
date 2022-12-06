import React from "react";
import styles from '../style/SerchBar.module.css';
//import onSearch from '../App';
import { useState } from "react";



export default function SearchBar(props) {
   const { onSearch } = props;
   const [character, setCharacter] = useState("");

   const handleChange = (evento) => {
      setCharacter(evento.target.value);
   }
   return (
      <div className={styles.SearchBar}>
      <input 
         type='search'
         value={character}
         onChange={handleChange}
         />
      <button 
         onClick={() => onSearch(character)}
         >Agregar</button>
      </div>
   );
}
