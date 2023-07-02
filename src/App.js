import {Router, Routes,Route} from 'react-router-dom'
import './App.css';
import Mint from './Pages/mint';
import LandingPage from './Pages/landingPage';

function App() {
  return (
    
    <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/mint' element={<Mint/>}/>
    </Routes>
  );
}

export default App;
