import logo from './logo.svg';
import './App.css';
import Button1 from './components/button';
import Contador from './components/contador';
import { useState } from 'react';
//hooks funciones especiales,
//useState() usar estados en los componentes

function App() {
  //uso de Hooks, en un arreglo
  const [numClicks, setNumClicks] = useState(0);
      //[valorInical, funcion]

  const mC = () => {
      setNumClicks(numClicks + 1);
  };
  const bR = () => {
    setNumClicks(0);
  };

  return (
    <div className="App">
      <div className='cont-img'>
          <img 
            className='logo'
            src={logo}
            alt='Logo'
            />
    </div>
    <div>
          
    </div>
     <div className='cont-contador'>
     <Contador
          numClicks = {numClicks}
          />
        <Button1 
        text = 'click'
        esBotonDeClick={true}
        manejarClick={mC}
        />
        <Button1
        text = 'reiniciar'
        esBotonDeClick={false}
        manejarClick={bR}
        />
      </div>
      
    </div>
  );
}

export default App;
