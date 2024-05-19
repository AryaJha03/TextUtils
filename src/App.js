
import './App.css';
import Navbar from './components/Navbar'
import Textform from './components/Textform'
import React, { useState } from 'react'
import About from './components/About'
import Alert from './components/Alert'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  const [mode, setmode] = useState("white")
  const [alert, setalert] = useState(null)

  const showalert = (message, type) => {
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null)
    }, 1500);
  }
  const togglemode = () => {
    if (mode === "dark") {
      setmode("white")
      document.body.style.backgroundColor = "white"
      showalert('Light Mode has been enabled', 'success')
    }
    else {
      setmode("dark")
      document.body.style.backgroundColor = "#3a4853"
      showalert('Dark Mode has been enabled', 'success')
    }
  }
  return (
    <>
      <Router>
        <Navbar text="TextUtils" mode={mode} togglemode={togglemode} />
        <div className="alertbox">
        <Alert Alertmsg={alert} />
        </div>
        <div className="container my-3">
          <Routes>
            <Route exact path='/About' element={
              <About mode={mode}/>}
            />
            <Route exact path='/' element={
              <Textform showalert={showalert} heading="Enter the text to analyze below" mode={mode} />}
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}
export default App;
