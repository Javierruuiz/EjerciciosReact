export function Ejer5(){
    
    var nombres = ['dog', 'cat', 'chicken', 'cow', 'sheep', 'horse']
    
    var listaNombres = nombres.map(nombre => 
      <li key={nombre}>
        {nombre}
      </li>
    );
    return (
      <>
      {listaNombres}
      </>
    );
}
