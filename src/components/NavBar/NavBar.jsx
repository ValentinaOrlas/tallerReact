import { NavItem } from "../NavItem/NavItem";
import '../../styles/navBar.css'

export const NavBar = () => {
  return (
    <div className="contentNav">
      <NavItem to='/saludo' item="Saludo" />
      <NavItem to='/operaciones' item="Operaciones Básicas" />
      <NavItem to='/color' item="Color Aleatorio" />
      <NavItem to='/persona' item="Formulario Persona" />
      <NavItem to='/tarea' item="Capturar Tarea" />
    </div>
  );
};
