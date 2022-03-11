import React from 'react';

// Components
import Navbar from './components/Navbar';
import Header from './components/Header';

// Styles
import './App.css';
import About from './components/About';

const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <Header />
        <About />
      </main>
    </>
  );
};

export default App;
