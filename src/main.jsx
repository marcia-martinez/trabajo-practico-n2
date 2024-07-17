import React from 'react'
import ReactDOM from 'react-dom/client'
import Inicio from './Inicio.jsx'
import IniciarSesion from './paginas/IniciarSesion.jsx'
import RegistroForm from './paginas/Registro.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />}> </Route>
        <Route path="/Registro" element={<RegistroForm />}> </Route>
        <Route path="/InicioSesion" element={<IniciarSesion />}> </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)