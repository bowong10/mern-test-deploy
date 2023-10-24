import logo from './logo.svg';
import './App.css';
import Headbar from './components/Headbar';
import Home from './View/Home';

import Car from './View/Car'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
  


function App() {
  return (
    <div className="App">
        <Headbar />
        <Home />
        <Car />
    </div>
  );
}

// function App() {
//   return (
//     <div className="App">
//         <Headbar />
//         <Home />
//     </div>
//   );
// }

export default App;

