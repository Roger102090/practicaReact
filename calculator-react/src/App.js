import React from 'react';
import logo from './logo.svg';
import './App.css';
import Boton  from './componentes/boton';
import Pantalla from './componentes/pantalla';
import BotonClear from './componentes/clear';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {

    const [input, setInput] = useState('');

    const addInput = val => {
      setInput(input + val);
    };

    const calcularResulatod = ()=> {
      if(input) {
        setInput(evaluate(input));
      } else {
        alert('Favor de ingresar un valor')
      }
    }

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
          <Boton manejarInput={calcularResulatod}>=</Boton>
          <Boton manejarInput={addInput}>0</Boton>
          <Boton manejarInput={addInput}>.</Boton>
          <Boton manejarInput={addInput}>/</Boton>
        </div>
        <div className='fila'>
          <BotonClear manejarClear={() => setInput('')} >
            Clear
          </BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
