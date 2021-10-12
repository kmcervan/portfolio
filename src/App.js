import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import Contact from './components/Contact';
import Header from './components/Header'
import MainPage from './components/MainPage';
import Projects from './components/Projects';
import Resume from './components/Resume';

function App() {
  return (
    <div className="App">
      <Router >
        <Header />
        <MainPage />
        <Projects />
        <Resume />
        <Contact />
      </Router>
    </div>
  );
}

export default App;
