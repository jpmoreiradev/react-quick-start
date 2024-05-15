import logo from './logo.svg';
import './App.css';
import NameAutor from './NameAutor';
import ListAtt from './ListAtt';
import Contador from './Contador';
import UpperCase from './UpperCase';

function App() {
  const listaDeAtividades = ["Se vestir", "ir para faculdade", "estudar", "ir para casa"]
  return (
    <div className="App">
      <header className="App-header"> 
      <NameAutor text="Sistema de Informação" name="João Pedro Moreira De Aquino" />
      <ListAtt list={listaDeAtividades}/>
      <Contador />  

      <UpperCase upperCase="esse texto vai fica em uppercase">
        UMtesto qualquer
      </UpperCase>
      <UpperCase lowerCase="ESSE TEXTO VAI FICA EM LOWERCASE"/>
      
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
