import React from 'react';

// Components
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';

// Styles
import './App.css';
import Contact from './components/Contact';

const App = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Header />
        <About />
        <Projects />
        <Contact />
      </main>
    </>
  );
};

export default App;
