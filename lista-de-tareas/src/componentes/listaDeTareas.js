import React, { useState } from 'react';
import TareaForm from './formulario';
import '../style/listaDeTareas.css'

function ListaDeTareas() {

    const [tareas, setTareas] = useState([]);
    //es un hook inicialmente tareas va a ser un arreglo vacio
    //como lo indica el arreglo dentro de useState

    return (
        <>
        <TareaForm />
        <div className='tareasListaCont'>
            {
    //map es un metodo que toma cada una de las tareas
    //en este caso y las pasa como argumentos
                tareas.map((tareas) =>
                    <Tarea 
                    
                    texto={tareas.texto}
                    completada= {tareas.completada}
                    />

                )

            }
        </div>
        </>
    )
};

export default ListaDeTareas;