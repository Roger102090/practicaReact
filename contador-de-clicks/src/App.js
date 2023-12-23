import logo from './logo.svg';
import './App.css';
import Button1 from './components/button'
import Contador from './components/contador'

function App() {

  const mC = () => {
      console.log('click');
  }
  const bR = () => {
      console.log('reiniciar');
  }

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
          numClicks = '5'
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
