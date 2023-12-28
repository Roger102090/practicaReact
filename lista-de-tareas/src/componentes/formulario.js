import React from 'react';
import '../style/tareaForm.css';


function TareaForm(props) {
    return (
        <form className='tareaform'>
            <input
                className='tareaImput'
                type='text'
                placeholder='Escribre una tarea'
                name='texto'
            />
            <button className='tareaBoton'>
                Agregar tarea
            </button>
        </form>
    )
};

export default TareaForm;