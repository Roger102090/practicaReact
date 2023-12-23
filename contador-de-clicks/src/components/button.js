import React from React;

function button({text, esBotonDeClick}) {
    return(
        <button className={esBotonDeClick ? 'botonClick' : 'botonReiniciar' }>
            {text}
        </button>
    )
}