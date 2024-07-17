import React from "react";
import "./TarjetaProducto.css"
import cama from "../assets/cama.jpg"


function TarjetaProducto({ nombre, precio, id, sku, descripcion,}) {
  function handleClick(){
    alert("cont");
  }
  
  return (
    <>
    <div className="TargetaProducto_MargenIzquierdo">
    <div className="listPrinterBody">
    <img src={cama} alt="z" width={200} height={200} />
    <div className="listPrinterText">
      <h3>{nombre}</h3>
      <p>{descripcion.slice(0,100)}...</p>
      <p>Precio: $ {precio} <br /> Codigo del producto: {sku}</p>
      <button onClick={handleClick}>Ver detalles</button>
    </div>
    </div>
    </div>
    </>
  );
}

export default TarjetaProducto;