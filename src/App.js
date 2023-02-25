
import { Routes,Route } from 'react-router-dom';
import './App.css';
import Movies from './Movies';
import Landingpage from './Landingpage';
import LandingpageAftersearch from './LandingpageAftersearch';

function App() {
  return (
    <div className="App">
     <Routes>

     <Route path='/' element= { <Landingpage />}  />
     <Route path = '' element = { <LandingpageAftersearch/>} />
     <Route path='' element= { <Movies/> }  />

     </Routes>
    </div>
  );
}

export default App;
