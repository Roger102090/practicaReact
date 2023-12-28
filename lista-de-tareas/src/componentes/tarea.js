import React from 'react';
import '../style/tarea.css';
import {AiFillCloseCircle} from 'react-icons/ai';

function Tareas({ id, text, completada, completarTarea, eliminiarTarea}) {
    return (
        <div className={completada ? 'tareaCont completada' :'tareaCont'}>
            <div className='tareaText'>
                {text}
            </div>
            <div className='cont-tareaIconos'>
                <AiFillCloseCircle className='tareaIcono'/>
            </div>
        </div>
    )
};

export default Tareas;