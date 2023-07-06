import React from "react";
import '../hojas-de-estilo/Boton.css'
//funcion que recibe props y retorna un div con la clase boton-contenedor
function Boton(props) {
  const esOperador = (valor) => {
    // eslint-disable-next-line eqeqeq
    return isNaN(valor) && (valor !== ".") && (valor !== "=");
  };
  return (
    <div
      className={`boton-contenedor ${esOperador(props.children) ? "operador" : null}`.trimEnd()}
      onClick={() => props.manejarClic(props.children)}>
      {props.children}
    </div>
  );
}

export default Boton;
