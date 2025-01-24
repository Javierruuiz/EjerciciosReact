export function Ejer3({id}){
var button = "button";
    function click(){
        alert("has hecho click en el"+id);
    }
    return(
        <>
        <button onClick={click}>Click me {id}</button>
        </>
    )
}