import React from 'react';
import '../style/button.css';

function Button1({text, esBotonDeClick, manejarClick}) {
    return(
        <button className={esBotonDeClick ? 'botonClick' : 'botonReiniciar' }
        onClick={manejarClick}>
            {text}
        </button>
    )
}
export default Button1;