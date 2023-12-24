import React from 'react';
import '../style/boton.css'
function Boton(props) {
    const esOperador = valor => {
        return isNaN(valor) && (valor !== '.') && (valor !== '=')
    }

    return ( //                                  Importante!
        <div
        className={`boton-cont ${esOperador(props.children) ? 'operador' : null}`}
        >
            {props.children} 
        </div> //props.children, toma todo lo que se encuentre dentro de el coponente
            //cuando lo usas como etiqueta por ejemplo
            // <Boton>
            // todo lo que este dentro de la etiqueta del componente
            // va a ser usado para renderizar
            //<Buton/>
    )
}

export default Boton;