import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/navbar/Navbar'

function App() {
  return (
    <>
      <Navbar/>
      <div className='nav-padding'>
        <Outlet/>
      </div>
    </>
  );
}

export default App;
