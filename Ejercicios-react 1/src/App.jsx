//Ejercicio 1:

import { useState } from "react";
import "./App.css";

function App() {
  const [items] = useState(["Pizza", "Empanadas", "Hamburguesa", "Pasta", "Helado"]);
  const [search, setSearch] = useState("");

  const filtered = items.filter((item) =>
    item.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <h1>🍕 Mis Comidas Favoritas</h1>
      <input
        type="text"
        placeholder="Buscar comida..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <ul>
        {filtered.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;