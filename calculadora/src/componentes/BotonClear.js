import React from "react";
import "../hojas-de-estilo/BotonClear.css";

//funcion para el boton clear que recibe como props el texto y la funcion para manejar el clear
const BotonClear = (props) => (
  <div className="boton-clear" onClick={props.manejarClear}>{props.children}</div>
);

export default BotonClear;
