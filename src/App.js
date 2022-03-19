import React, { useState, useEffect } from 'react';

// Components
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Styles
import './App.css';

const innerWidth = window.innerWidth;

const App = () => {
  const [windowWidth, setWindowWidth] = useState(innerWidth);

  useEffect(() => {
    window.addEventListener('resize', function () {
      setWindowWidth(window.innerWidth);
    });
  });

  return (
    <>
      <header>
        <Navbar windowWidth={windowWidth} />
      </header>
      <main>
        <Header />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </>
  );
};

export default App;
