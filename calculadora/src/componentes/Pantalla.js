import React from "react";
import '../hojas-de-estilo/Pantalla.css'

// funcion para la pantalla que recibe como props el input y lo muestra en pantalla 
const Pantalla = ({ input }) => 
<div className='input'>
  {input}
</div>;

export default Pantalla;
