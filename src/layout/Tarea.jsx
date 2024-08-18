import React, { useState } from "react";

export const Tarea = () => {
  const [tarea, setTarea] = useState({ nombre: "", descripcion: "" });
  const [tareas, setTareas] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTarea({ ...tarea, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTareas([...tareas, tarea]);
    setTarea({ nombre: "", descripcion: "" });
  };

  return (
    <div>
      <h2>Registro de Tarea</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre de la tarea:</label>
          <input
            type="text"
            name="nombre"
            value={tarea.nombre}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Descripción:</label>
          <input
            type="text"
            name="descripcion"
            value={tarea.descripcion}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Guardar Tarea</button>
      </form>

      <h3>Lista de Tareas</h3>
      <ul>
        {tareas.map((task, index) => (
          <li key={index}>
            <strong>{task.nombre}</strong>: {task.descripcion}
          </li>
        ))}
      </ul>
    </div>
  );
};


