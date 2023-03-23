import logo from './logo.svg';
import './App.css';
import ContacList from './components/container/contac_list';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ContacList></ContacList>
      </header>
    </div>
  );
}

export default App;
