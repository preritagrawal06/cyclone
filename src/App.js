import {Router, Routes,Route} from 'react-router-dom'
import './App.css';
import Mint from './Pages/mint';

function App() {
  return (
    
    <Routes>
      <Route path='/' element={<Mint/>}/>
    </Routes>
  );
}

export default App;
