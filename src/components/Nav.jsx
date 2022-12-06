import React from "react";
import SerchBar from './SearchBar';
import styles from '../style/Nav.module.css'

function onClickRandom () {
  let randomID = Math.floor(Math.random() * 826);
  console.log(randomID)
  return randomID;
}

function NavBar ({onSearch}) {
    return <div className={styles.NavBar}>
            <SerchBar 
            onSearch={onSearch}
            />
            <button onClick={() => onSearch(onClickRandom())}>Random</button>
        </div>
}

export default NavBar;