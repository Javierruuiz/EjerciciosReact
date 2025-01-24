export function Login(){
    
    var nombres = ["pepe","jose","pedro"]
    
    var listaNombres = nombres.map(nombre => 
      <li key={nombre}>
        {nombre}
      </li>
    );
    return (
      <>
      {listaNombres}
        </>
  )
  }