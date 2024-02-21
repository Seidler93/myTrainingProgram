import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
      <Navbar/>
      <div className='nav-padding'>
        <Outlet/>
      </div>
      <Footer/>
    </>
  );
}

export default App;
