import React from 'react';

// Components
import Navbar from './components/Navbar';
import Header from './components/Header';

// Styles
import './App.css';

const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <Header />
      </main>
    </>
  );
};

export default App;
