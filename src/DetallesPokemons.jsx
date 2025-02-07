import { useLocation, useNavigate } from "react-router-dom";


export function DetallesPokemons() {
  const location = useLocation();
  const navigate = useNavigate();
  const pokemon = location.state?.pokemon;

  if (!pokemon) {
    return <p id="no-data">No hay datos del Pokémon.</p>;
  }

  return (
    <div id="pokemon-details">
      <button id="back-button" onClick={() => navigate(-1)}>Volver</button>
      <div id="pokemon-info">
      <h2 id="pokemon-name">{pokemon.name}</h2>
        <div id="pokemon-images">
          <img id="pokemon-image" src={pokemon.image} alt={`${pokemon.name} normal`} />
          <img id="pokemon-shiny" src={pokemon.shinyImage} alt={`${pokemon.name} shiny`} />
        </div>
        <div id="pokemon-details-info">
          <p id="pokemon-height"><strong>Altura:</strong> {pokemon.height}</p>
          <p id="pokemon-weight"><strong>Peso:</strong> {pokemon.weight}</p>
          <p id="pokemon-abilities"><strong>Habilidades:</strong> {pokemon.abilities.join(", ")}</p>
          <p id="pokemon-types"><strong>Tipos:</strong> {pokemon.types.join(", ")}</p>
          </div>
          <div>
          <h3 id="stats-title">Estadísticas</h3>
          <ul id="pokemon-stats">
            {pokemon.stats.map((stat, index) => (
              <li key={index} className="stat-item">
                <strong>{stat.name}:</strong> {stat.value}
              </li>
            ))}
          </ul>
          </div>
      </div>
    </div>
  );
}
