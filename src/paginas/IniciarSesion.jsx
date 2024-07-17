import './IniciarSesion.css'
import { Link } from "react-router-dom";


function IniciarSesion() {
  return (
    <>
    <body>
    <div class="login-conteiner">
      <form>
      <div class="login-border">

        <h2>Iniciar sesión</h2>


        <label className="login-label" for="nombre">Nombre</label>
        <input className="login-input" type="text" placeholder="ingrese su nombre de usuario" required="true"/>

        <label className="login-label" for="contraseña">Contraseña</label>
        <input className="login-input" type="password" placeholder="ingrese su contraseña" required="true"/>

        <input class="buttom-send-login" type="submit" value="Enviar"></input>

      </div>
      </form>

    </div>
    </body>
    </>

  )
}




export default IniciarSesion
