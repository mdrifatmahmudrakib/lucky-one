import logo from './logo.svg';
import './App.css';
import Header from './Component/Header/Header';
import Shop from './Shop/Shop';
import Qa from './Component/Header/QA/Qa';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Shop></Shop>
      <Qa></Qa>
    </div>
  );
}

export default App;
