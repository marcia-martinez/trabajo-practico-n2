import React, { useState } from 'react';
import './Registro.css';

const RegistroForm = () => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [password, setPassword] = useState('');
  const [confirmarPassword, setConfirmarPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // 
  };

  return (
    <div className="registro-form-container">
      <h2>Registro</h2>
      <form onSubmit={handleSubmit} className="registro-form">
        <div className="form-group">
          <label htmlFor="nombre">Nombre:</label>
          <input type="text" id="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="apellido">Apellido:</label>
          <input type="text" id="apellido" value={apellido} onChange={(e) => setApellido(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="telefono">Teléfono:</label>
          <input type="tel" id="telefono" value={telefono} onChange={(e) => setTelefono(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Contraseña:</label>
          <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="confirmar-password">Confirmar Contraseña:</label>
          <input type="password" id="confirmar-password" value={confirmarPassword} onChange={(e) => setConfirmarPassword(e.target.value)} required />
        </div>
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
};

export default RegistroForm;
