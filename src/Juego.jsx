import { useState, useEffect } from "react";
import "./juegos.css";
import { Ranking } from "./Ranking";
import { useNavigate } from "react-router-dom";

export function Juego() {
    const [seleccionado, setSeleccionado] = useState({});
    const [opciones, setOpciones] = useState([]);
    const [mensaje, setMensaje] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        iniciarJuego();
    }, []);

    function iniciarJuego() {
        setMensaje(""); 
        getRandomPokemon();
    }

    function getRandomPokemon() {
        const id = Math.floor(Math.random() * 1000);
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then((response) => response.json())
            .then((pokemon) => {
                setSeleccionado(pokemon);
                generarOpciones(pokemon);
            });
    }

    function generarOpciones(correcto) {
        let opciones = [correcto.name];

        const promesas = [];
        for (let i = 0; i < 3; i++) {
            let idAleatorio = Math.floor(Math.random() * 1000);
            promesas.push(
                fetch(`https://pokeapi.co/api/v2/pokemon/${idAleatorio}`)
                    .then((res) => res.json())
                    .then((poke) => poke.name)
            );
        }

        Promise.all(promesas).then((nombresFalsos) => {
            opciones = [...opciones, ...nombresFalsos];
            setOpciones(opciones.sort(() => Math.random() - 0.5));
        });
    }

    function verificarRespuesta(nombre) {
        if (nombre === seleccionado.name) {
            setMensaje("¡Correcto! ");
            navigate("/WinOrLose", { state: { winOrLose: true, name: seleccionado.name } });
        } else {
            setMensaje("Incorrecto. Inténtalo de nuevo.");
        }
    }

    return (
        <div className="container">
            <h2>¿Cuál es el nombre de este Pokémon?</h2>
            <div className="card">
                {seleccionado.sprites && (
                    <img src={seleccionado.sprites.front_default} alt="Pokemon" className="img-fluid" />
                )}
                <div className="opciones">
                    {opciones.map((nombre, index) => (
                        <button key={index} className="btn btn-primary" onClick={() => verificarRespuesta(nombre)}>
                            {nombre}
                        </button>
                    ))}
                </div>
                <p>{mensaje}</p>
                <button className="btn btn-success" onClick={iniciarJuego}>Jugar de nuevo</button>
            </div>
            <div><Ranking /></div>
        </div>
        
    );
    
}

export default Juego;
