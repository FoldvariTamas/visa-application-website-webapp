import { Routes, Route } from 'react-router-dom';
import LandingPage from './Components/LandingPage';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage/>}/>
    </Routes>
  );
}

export default App;
