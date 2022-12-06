import Card from './Card';
import styles from '../style/Cards.module.css'

export default function Cards(props) {
   const { characters, onClose } = props;
   return <div className={styles.Cards}> 
      {characters.map(e => <Card 
      key={e.name}
      name={e.name}
      species={e.species}
      gender={e.gender}
      image={e.image}
      onClose={() => onClose(e.id)}
      />)}
   
      
   </div>;
   
}
