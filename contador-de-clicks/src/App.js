import './App.css';
import logoApp from './imagen/logo192.png';

function App() {
  return (
    <div className="App">
      <div className='logo-contenedor'>
      <img 
      className='logo'
      src={logoApp}
      alt='Logo'/>
      </div>
    </div>
  );
}

export default App;
