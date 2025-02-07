import { getRedirectResult, GoogleAuthProvider, GithubAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from './firebase';
import { signInWithPopup, signOut } from "firebase/auth";
import { useState, useEffect } from "react";
import "./Login.css";

export function Login() {
  const googleAuthProvider = new GoogleAuthProvider();
  const githubAuthProvider = new GithubAuthProvider();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });
  }, []);

  getRedirectResult(auth)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential?.accessToken;
      setUser(result.user);
    })
    .catch((error) => {
      console.error("Error:", error);
    });

  function loginWithGoogle() {
    signInWithPopup(auth, googleAuthProvider)
      .then((result) => setUser(result.user))
      .catch((error) => console.error("Error:", error));
  }

  function loginWithGithub() {
    signInWithPopup(auth, githubAuthProvider)
      .then((result) => setUser(result.user))
      .catch((error) => console.error("Error:", error));
  }

  function logout() {
    signOut(auth)
      .then(() => setUser(null))
      .catch((error) => console.error("Error:", error));
  }

  function registerWithEmail() {
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => setUser(result.user))
      .catch((error) => console.error("Error:", error));
  }

  function loginWithEmail() {
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => setUser(result.user))
      .catch((error) => console.error("Error:", error));
  }

  return (
    <div className="container">
      {user ? (
        <>
          <h1 className="user-info">Bienvenido, {user.email}</h1>
          <button className="btn btn-danger" onClick={logout}>Logout</button>
        </>
      ) : (
        <>
          <h1 className="user-info">Login</h1>
          <div className="auth-form">
            <div className="form-group">
              <input
                type="email"
                placeholder="Email"
                className="form-control"
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Contraseña"
                className="form-control"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button className="btn btn-primary" onClick={registerWithEmail}>Registrarse</button>
            <button className="btn btn-secondary" onClick={loginWithEmail}>Login </button>
            <button className="btn btn-apps" onClick={loginWithGoogle}>Login con Google</button>
            <button className="btn btn-apps" onClick={loginWithGithub}>Login con GitHub</button>
          </div>  
        </>
      )}
    </div>
  );
}