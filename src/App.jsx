import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import {PokemosApi} from './pokemosApi';
import { Error404 } from './error404';
import { RutasPrivadas } from './RutasPrivadas';
import { Landing } from './Landing';
import { Juego } from './Juego';
import {Login} from './Login'; 
import { DetallesPokemons  } from "./DetallesPokemons";
import { useState } from "react";
import { useEffect } from "react";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
import { WinOrLose } from "./winOrLose";




function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
  });
},[])

  return (
    <>
      <BrowserRouter>
        <nav>
          <Link to='/'>Inicio</Link>
          <Link to='/PokemosApi'> Pokemons</Link>
          <Link to='/Juego'>Juego</Link>
          {user ? (
          <>
            <p>Bienvenido, {user.displayName ? user.displayName:user.email.split('@')[0]}</p>
            <Link to='/Login'>Cerrar Sesión</Link>
          </>
        ) : 
        <Link to='/Login'>Login</Link>
  }

        </nav>

        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/Login' element={<Login />} />

          <Route element={<RutasPrivadas />}>
          <Route path="/PokemosApi" element={<PokemosApi />} />
          <Route path="/DetallesPokemons/:name" element={<DetallesPokemons />} />
          <Route path='/Juego' element={<Juego />} />
          </Route>
          <Route path='/WinOrLose' element={< WinOrLose/>} />
          <Route path='*' element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
