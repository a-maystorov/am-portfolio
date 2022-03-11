import React from 'react';

// Components
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';

// Styles
import './App.css';

const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <Header />
        <About />
        <Projects />
      </main>
    </>
  );
};

export default App;
