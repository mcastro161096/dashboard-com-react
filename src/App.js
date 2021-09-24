import './App.css';
import MenuSuperior from './Components/MenuSuperior';
import Resumo from './Components/Resumo';
import Consultas from './Components/Consultas';
import Faturamento from './Components/Faturamento';
import {Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <MenuSuperior/>
      <div className="container-fluid">
          <div className="row">
            <div className="col">
              <Switch>
                <Route exact path="/" component={Resumo} />
                <Route path="/consultas" component={Consultas} />
                <Route path="/faturamento" component={Faturamento} />
              </Switch>
            </div>
          </div>
        </div>
    </div>
  );
}

export default App;
