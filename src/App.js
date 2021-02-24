import React, { Fragment, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Producto from "./components/Producto";
import Carrito from "./components/Carrito";

function App() {
  // Crear listado de productos
  const [productos, guardarProductos] = useState([
    { id: 1, nombre: "Camisa react JS", precio: 50 },
    { id: 2, nombre: "Camisa Angular", precio: 40 },
    { id: 3, nombre: "Camisa Vue", precio: 20 },
    { id: 4, nombre: "Camisa Svelte", precio: 10 },
  ]);

  // State para un carrito de compras
  const [carrito, agregarProducto] = useState([]);

  const fecha = new Date().getFullYear();

  return (
    <Fragment>
      <Header titulo="Mi tienda virtual" />

      <h1>Lista de productos</h1>
      {productos.map((producto) => (
        <Producto
          productos={productos}
          key={producto.id}
          producto={producto}
          carrito={carrito}
          agregarProducto={agregarProducto}
        />
      ))}

      <Carrito carrito={carrito} agregarProducto={agregarProducto} />

      <Footer fecha={fecha} />
    </Fragment>
  );
}

export default App;
