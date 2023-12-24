import logo from './logo.svg';
import './App.css';
import Boton  from './componentes/boton';
import Pantalla from './componentes/pantalla';
import BotonClear from './componentes/clear';
import { useState } from 'react';

function App() {

    const [input, setInput] = useState('');

    const addInput = val => {
      setInput(input + val);
    };

  return (
    <div className="App">
      <div className='contenedor-logo'>
        <img
        className='logo'
        src={logo}
        alt='logo'
        />
      </div>
      <div className='contenedor-calc'>
        <Pantalla
          input={input}
        />
        <div className='fila'>
          <Boton manejarInput={addInput}>1</Boton>
          <Boton manejarInput={addInput}>2</Boton>
          <Boton manejarInput={addInput}>3</Boton>
          <Boton manejarInput={addInput}>+</Boton>
        </div>
        <div className='fila'>
        <Boton manejarInput={addInput}>4</Boton>
        <Boton manejarInput={addInput}>5</Boton>
        <Boton manejarInput={addInput}>6</Boton>
        <Boton manejarInput={addInput}>-</Boton>
        </div>
        <div className='fila'>
        <Boton manejarInput={addInput}>7</Boton>
        <Boton manejarInput={addInput}>8</Boton>
        <Boton manejarInput={addInput}>9</Boton>
        <Boton manejarInput={addInput}>*</Boton>
        </div>
        <div className='fila'>
        <Boton manejarInput={addInput}>=</Boton>
        <Boton manejarInput={addInput}>0</Boton>
        <Boton manejarInput={addInput}>.</Boton>
        <Boton manejarInput={addInput}>/</Boton>
        </div>
        <div className='fila'>
        <BotonClear >Clear</BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
