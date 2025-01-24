export function Ejer7(){
    var nombre=<input type="text" />;
    var apellidos=<input type="text" />;

    function mostrardatos(){

    }
        return (
            <div>
                {nombre}
                {apellidos}
                <button onClick={mostrardatos}>Mostrar Datos</button>
            </div>
        );

        function mostrardatos() {
            const nombreValue = document.querySelector('input[type="text"]').value;
            const apellidosValue = document.querySelectorAll('input[type="text"]')[1].value;
            alert(`Hola ${nombreValue} ${apellidosValue}`);
        }
   
}