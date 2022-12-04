export default function SearchBar(props) {
   const { onSearch } = props;
   return (
      <div>
      <input type='search' />
      <button onClick={() => onSearch('futuro ID del personaje')}>Agregar</button>
      </div>
   );
}
