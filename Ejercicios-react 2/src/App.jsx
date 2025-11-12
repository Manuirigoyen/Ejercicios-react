//Ejercicio 2:

import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  // (Opcional) cambio automático cada 3 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setDarkMode((prev) => !prev);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`container ${darkMode ? "dark" : "light"}`}>
      <h1>💡 Interruptor de Luz</h1>
      <button onClick={() => setDarkMode(!darkMode)}>
        Cambiar modo
      </button>
    </div>
  );
}

export default App;

