import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import AboutMe from './pages/AboutMe';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AboutMe/>} exact/>
      </Routes>
    </Router>
  );
}

export default App;
