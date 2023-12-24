import logo from './logo.svg';
import './App.css';
import Boton  from './componentes/boton';

function App() {
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
        <div className='fila'>
          <Boton>
            1
          </Boton>
          <Boton>
            +
          </Boton>
        </div>
        <div className='fila'></div>
        <div className='fila'></div>
        <div className='fila'></div>
        <div className='fila'></div>
      </div>
    </div>
  );
}

export default App;
