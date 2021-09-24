import './App.css';
import MenuSuperior from './Components/MenuSuperior';
import Resumo from './Components/Resumo';
import Consultas from './Components/Consultas';
import Faturamento from './Components/Faturamento';

function App() {
  return (
    <div className="App">
      <MenuSuperior/>
      <Resumo/>
      <Consultas/>
      <Faturamento/>
    </div>
  );
}

export default App;
