import './App.css';
import Logo from './componentes/logo';
import ListaDeTareas from './componentes/listaDeTareas';

function App() {
  return (
    <div className="App">
      <div className='contImg'>
        <Logo/>
      </div>
      <div className='Tareas-lista'>
        <h1>
          Mis tareas
        </h1>
          <ListaDeTareas/>
      </div>
    </div>
  );
}

export default App;
