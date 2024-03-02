import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <section className='bg-[#F6F6F6] h-screen w-screen flex font-poppins text-white'>
      <Sidebar />
      <Navbar />
    </section>
  );
}

export default App;
