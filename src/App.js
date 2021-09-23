import './App.css';
import MenuSuperior from './Components/MenuSuperior';
import Resumo from './Components/Resumo';
import Consultas from './Components/Consultas';

function App() {
  return (
    <div className="App">
      <MenuSuperior/>
      <Resumo/>
      <Consultas/>
    </div>
  );
}

export default App;
