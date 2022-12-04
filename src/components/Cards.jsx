import Card from './Card';

export default function Cards(props) {
   const { characters } = props;
   return <div>
      {characters.map(e => <Card 
      key={e.name}
      name={e.name}
      species={e.species}
      gender={e.gender}
      image={e.image}
      onClose={()=>window.alert('Emulamos que cerramos la card')}
      />)}
   </div>;
}
