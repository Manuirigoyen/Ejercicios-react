//Ejercicio 5:

import { useState } from "react";
import "./App.css";

function App() {
  const [tareas, setTareas] = useState([
    { id: 1, texto: "Estudiar" },
    { id: 2, texto: "Hacer ejercicio" },
  ]);
  const [nuevaTarea, setNuevaTarea] = useState("");

  const agregarTarea = () => {
    if (nuevaTarea.trim() === "") return;
    const nueva = { id: Date.now(), texto: nuevaTarea };
    setTareas([...tareas, nueva]);
    setNuevaTarea("");
  };

  const eliminarTarea = (id) => {
    setTareas(tareas.filter((t) => t.id !== id));
  };

  return (
    <div className="container">
      <h1>📋 Lista de Tareas</h1>

      <input
        type="text"
        placeholder="Nueva tarea..."
        value={nuevaTarea}
        onChange={(e) => setNuevaTarea(e.target.value)}
      />
      <button onClick={agregarTarea}>Agregar</button>

      <table>
        <thead>
          <tr>
            <th>Tarea</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {tareas.map((t) => (
            <tr key={t.id}>
              <td>{t.texto}</td>
              <td>
                <button onClick={() => eliminarTarea(t.id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;