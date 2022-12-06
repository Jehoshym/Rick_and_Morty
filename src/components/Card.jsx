import React from "react";
import styles from "../style/Card.module.css"

export default function Card(props) {
   return (
      <div className={styles.Card}>
         <button className={styles.closeButton} onClick={props.onClose}>X</button>
         <h2 className={styles.name}>{props.name}</h2>
         <h2 className={styles.specie}>{props.species}</h2>
         <h2 className={styles.gender}>{props.gender}</h2>
         <img  src={props.image} className={styles.foto} alt="{props.name}" />
      </div>
   );
}
