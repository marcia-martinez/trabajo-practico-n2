import './Inicio.css'
import BarraDeNavegacion from './components/BarraDeNavegacion';
import TarjetaProducto from './components/TarjetaProducto';
import { useState, useEffect } from 'react';


function Inicio() {
  const [Camas, setCama] = useState([]);
  useEffect( () => {
    fetch("https://66967bfb0312447373c2ba7b.mockapi.io/camas")
    .then((res) => res.json())
    .then((data) => setCama(data));}, []);

  return (
    <>
    <BarraDeNavegacion></BarraDeNavegacion>
    <h1>Mundo del Sueño</h1>
    <div className='TargetaProducto_Adaptacion'>
    {!Camas.length ? ( <p> Error 404</p> ) :
        (Camas.map((reloj) => (<TarjetaProducto key={reloj.id} {...reloj} />)))}
    </div>
    </>
  )
}

export default Inicio
