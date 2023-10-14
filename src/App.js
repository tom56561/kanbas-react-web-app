import logo from './logo.svg';
import './App.css';
import './index.css';
import Labs from "./labs";
import HelloWorld from "./labs/a3/HelloWorld";
import Kanbas from "./kanbas";


function App() {
  return (
    <div>
      <HelloWorld/>
      <Labs/>
      <Kanbas/>
    </div>
  );
}

export default App;
