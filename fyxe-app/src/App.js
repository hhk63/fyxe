import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import Learn from './pages/Learn';
import GPTWall from './pages/GPTWall';
import About from './pages/About';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route>
          <Route path='/' element={<HomePage/>} />
          <Route path='/Learn' element={<Learn/>} />
          <Route path='/GPTWall' element={<GPTWall />} />
          <Route path='About' element={<About/>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
