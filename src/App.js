import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import './App.css';
import Contact from './components/Contact';
import Header from './components/Header'
import MainPage from './components/MainPage';

function App() {
  return (
    <div className="App">
      <Router >
        <MainPage />
        <Header />
        <Contact />
      </Router>
    </div>
  );
}

export default App;
