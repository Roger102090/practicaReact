import React from 'react';
import '../style/botonClear.css'

const BotonClear = (props) => (
    <div className='botonClear'>
        {props.children}
    </div>
);

export default BotonClear; 