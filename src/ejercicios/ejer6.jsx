export function Ejer6({ lista }){
    
    var listaAnimales = lista.map(animal => 
      <li key={animal}>
        {animal}
      </li>
    );
    return (
      <>
      {listaAnimales}
    </>
    );
}