import React from 'react';
import '../style/pantalla.css'


//se puede hacer un componente como 
//una arrow funtion
//se uso el parentesis directamente 
//en vez de return() porque no hay logica dentro
//es solo para que sea mas facil de leer
const Pantalla  = ({input}) => (
    <div className='input'>
        {input}
    </div>
);

export default Pantalla;