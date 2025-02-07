import { useNavigate } from "react-router-dom";
export function Landing() {
  const navigate = useNavigate();
  function pokemons() {
    navigate('/PokemosApi');
  }
    return (
      <div className="landing-container">
        
        <header className="hero">
          <h1>¡DESCUBRE EL MUNDO POKÉMON!</h1>
          <p>Explora más de 1000 Pokémon en la Pokédex y demuestra tu conocimiento con un juego interactivo.</p>
          <button onClick={pokemons} className="cta-button">Explorar Pokédex</button>


        </header>
  
        
        <section className="features">
          <div className="feature">
            <h2>Explora la Pokédex</h2>
            <p>Descubre información detallada de todos los Pokémon.</p>
          </div>
          <div className="feature">
            <h2>Pon a prueba tu conocimiento</h2>
            <p>Juega y demuestra cuánto sabes sobre Pokémon.</p>
          </div>
          <div className="feature">
            <h2>Diseño atractivo</h2>
            <p>Una interfaz amigable para fans de todas las edades.</p>
          </div>
        </section>
      </div>
    );
  }
  