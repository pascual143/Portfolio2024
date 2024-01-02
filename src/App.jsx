import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from './pages/home'
// import NavBar from './pages/navBar'
import Proyects from './pages/proyects'

import "./styles.css";

function App() {
  return (
    <>
      <div className='disappearing'>
        {/* <NavBar /> */}

          <Routes >
            <Route path="/Portfolio2024/" exact element={<Home />} />
            <Route path="/Portfolio2024/proyects" element={<Proyects />} />
          </Routes>

      </div>
    </>
  );
}

export default App;
