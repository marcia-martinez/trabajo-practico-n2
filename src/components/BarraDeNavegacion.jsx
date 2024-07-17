import './BarraDeNavegacion.css';
import { Link } from "react-router-dom";

function BarraDeNavegacion() {
  return (
    <>
      <nav className="contenedor_navegacion">
        <ul>
          <li className="item_navegacion">
            <a href="" className="item_navegacion">Pagina principal</a>
          </li>

          <li className="item_navegacion">
            <Link to="/Registro">Registro</Link>
          </li>

          <li className="item_navegacion">
            <Link to="/InicioSesion">Iniciar Sesión</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default BarraDeNavegacion;
