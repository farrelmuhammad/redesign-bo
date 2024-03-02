import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <section className='bg-red-900 h-screen w-screen flex font-poppins text-white'>
      <Navbar />
    </section>
  );
}

export default App;
