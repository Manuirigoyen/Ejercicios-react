//Ejercicio 3:

import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  // Cargar datos guardados si existen
  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    const savedPass = localStorage.getItem("password");
    if (savedUser) setUser(savedUser);
    if (savedPass) setPassword(savedPass);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("user", user);
    localStorage.setItem("password", password);
    alert("Datos guardados ✅");
  };

  return (
    <div className="container">
      <h1>Iniciar Sesión</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Usuario"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Guardar</button>
      </form>
    </div>
  );
}

export default App;