import { useState, useEffect } from 'react';
import './App.css';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import totalexperinces from './experience.json';
function App() {
  const [mode, setMode] = useState('dark');
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
    } else {
      setMode('light');
    }
  }
  const [experiences, setExperiences] = useState(totalexperinces)
  useEffect(() => {
    setExperiences(totalexperinces);
  }, [])
  return (
    <div className="App mydivclass" style={{ backgroundColor: mode === 'light' ? 'white' : 'black' }} >
      <Navbar mode={mode} toggleMode={toggleMode}></Navbar>
      <Home mode={mode} experiences={experiences}></Home>
      <Footer mode={mode} ></Footer>
    </div>
  );
}

export default App;
