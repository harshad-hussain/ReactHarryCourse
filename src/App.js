import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Abt from './Components/Abt';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      document.body.style.color = 'white';
      showAlert('Dark mode is enabled!', 'success');
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert('Light mode is enabled!', 'success');
    }
  };

  return (
    <>
      <Router>
        <Navbar Title="TextUtils" aboutUs="About" Home="Home" mode={mode} toggleMode={toggleMode}></Navbar>
        <Alert alert={alert} />
        <div className="container">
          <Routes>
            <Route path="/about" element={<Abt/>} />
            <Route path="/" element={<TextForm showalert={showAlert} heading="Enter the text to analyze below" mode={mode} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
