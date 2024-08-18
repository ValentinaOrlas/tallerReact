import React, { useState } from "react";

export const Persona = () => {
  const [persona, setPersona] = useState({nombre: "", usuario: "", correo: "",telefono: "", id: ""});

  const [users, setUsers] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPersona({...persona, [name]: value,});
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const userExists = users.some(
      (user) =>
        user.usuario === persona.usuario ||
        user.correo === persona.correo ||
        user.id === persona.id
    );

    if (userExists) {
      alert("El usuario ya existe");
    } else {
      setUsers([...users, persona]);
      alert("Usuario registrado exitosamente");
    }

    setPersona({ nombre: "", usuario: "", correo: "", telefono: "", id: ""});
  };

  return (
    <div>
      <h2>Registro de Usuario</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre:</label>
          <input type="text" name="nombre" value={persona.nombre} onChange={handleChange} required/>
        </div>
        <div>
          <label>Usuario:</label>
          <input type="text" name="usuario" value={persona.usuario} onChange={handleChange} required/>
        </div>
        <div>
          <label>Correo:</label>
          <input type="email" name="correo" value={persona.correo} onChange={handleChange} required/>
        </div>
        <div>
          <label>Teléfono:</label>
          <input type="tel" name="telefono" value={persona.telefono} onChange={handleChange} required/>
        </div>
        <div>
          <label>ID:</label>
          <input type="text" name="id" value={persona.id} onChange={handleChange} required/>
        </div>
        <button type="submit">Registrar</button>
      </form>
    </div>
  );
};
