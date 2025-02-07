import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

export function PokemosApi() {
  const [counts, setCount] = useState([]);
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon?limit=8");
  const navigate = useNavigate();

  useEffect(() => {
    cargapoke();
  }, []);

  function cargapoke() {
    fetch(url)
      .then((response) => response.json())
      .then((datosAPI) => {
        Promise.all(
          datosAPI.results.map((pokemones) =>
            fetch(pokemones.url)
              .then((response) => response.json())
              .then((pokemon) => ({
                ...pokemones,
                image: pokemon.sprites.front_default,
                shinyImage: pokemon.sprites.front_shiny, 
                id: pokemon.id,
                types: pokemon.types.map((type) => type.type.name),
                url: pokemones.url,
                height: pokemon.height,
                weight: pokemon.weight,
                abilities: pokemon.abilities.map((ability) => ability.ability.name),
                stats: pokemon.stats.map((stat) => ({
                  name: stat.stat.name,
                  value: stat.base_stat,
                })),
              }))
          )
        ).then((newPokemons) => {
          setCount((prev) => [...prev, ...newPokemons]);
          setUrl(datosAPI.next);
        });
      });
  }
  

  function cargarmas() {
    cargapoke();
  }

  function verDetalles(pokemon) {
    navigate(`/DetallesPokemons/${pokemon.name}`, { state: { pokemon } });
  }

  // Función para obtener la clase del tipo
  function getTypeClass(types) {
    return types[0]; 
  }

  return (
    <div className="pokedex">
      <ul className="pokemon-list">
        {counts.map((pokemon) => (
          <li
            key={pokemon.name}
            className={`pokemon-item ${getTypeClass(pokemon.types)}`} 
          >
            <img src={pokemon.image} alt={pokemon.name}className="pokemon-image"/>
            <p className="pokemon-name">{pokemon.name}</p> {}
            <p className="pokemon-name"># {pokemon.id}</p>
            <button onClick={() => verDetalles(pokemon)} className="btn-details">
              Ver detalles
            </button>
          </li>
        ))}
      </ul>
      <div className="load-more-container">
        <button className="load-more" onClick={cargarmas}>
          Cargar más
        </button>
      </div>
    </div>
  );
}

