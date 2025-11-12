//Ejercicio 4:

import { useState } from "react";
import "./App.css";

function App() {
  const productosDisponibles = [
    { id: 1, nombre: "Camiseta", precio: 25 },
    { id: 2, nombre: "Pantalón", precio: 40 },
    { id: 3, nombre: "Zapatillas", precio: 60 },
  ];

  const [carrito, setCarrito] = useState([]);

  // Agregar producto al carrito
  const agregarAlCarrito = (producto) => {
    // Si el producto ya está en el carrito, solo aumentamos la cantidad
    const productoExistente = carrito.find((item) => item.id === producto.id);

    if (productoExistente) {
      setCarrito(
        carrito.map((item) =>
          item.id === producto.id
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        )
      );
    } else {
      setCarrito([...carrito, { ...producto, cantidad: 1 }]);
    }
  };

  // Eliminar producto del carrito
  const eliminarDelCarrito = (id) => {
    const productoExistente = carrito.find((item) => item.id === id);

    if (productoExistente.cantidad > 1) {
      // Si tiene más de una unidad, reducimos la cantidad
      setCarrito(
        carrito.map((item) =>
          item.id === id
            ? { ...item, cantidad: item.cantidad - 1 }
            : item
        )
      );
    } else {
      // Si solo hay una unidad, eliminamos el producto
      setCarrito(carrito.filter((item) => item.id !== id));
    }
  };

  return (
    <div className="container">
      <h1>🛒 Carrito de Compras</h1>

      <div className="productos">
        <h2>Productos Disponibles</h2>
        {productosDisponibles.map((producto) => (
          <div key={producto.id} className="producto">
            <span>
              {producto.nombre} — ${producto.precio}
            </span>
            <button onClick={() => agregarAlCarrito(producto)}>Agregar</button>
          </div>
        ))}
      </div>

      <div className="carrito">
        <h2>Tu Carrito</h2>
        {carrito.length === 0 ? (
          <p>El carrito está vacío</p>
        ) : (
          carrito.map((item) => (
            <div key={item.id} className="producto-carrito">
              <span>
                {item.nombre} — ${item.precio} × {item.cantidad}
              </span>
              <button onClick={() => eliminarDelCarrito(item.id)}>
                Eliminar
              </button>
            </div>
          ))
        )}

        {carrito.length > 0 && (
          <h3>
            Total: $
            {carrito.reduce(
              (total, item) => total + item.precio * item.cantidad,
              0
            )}
          </h3>
        )}
      </div>
    </div>
  );
}

export default App;
