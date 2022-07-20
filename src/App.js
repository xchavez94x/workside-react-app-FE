import React, { useState } from 'react';
import { Routes, Route } from "react-router-dom"
import Container from './components/Container';
import Navbar from './components/Navbar';
import Main from './pages/Main';
import './App.css';
import Account from './pages/Account';
import MobileMenu from './components/MobileMenu';
import Backdrop from './components/Backdrop';

function App() {
  const [ showMenu, setShowMenu ] = useState(false)
  const showMobileMenuHandler = () => {
    setShowMenu( prevShow => !prevShow) 
  }
  return (
    <div className="App">
      <Container>
        <Navbar burgerClicked={showMobileMenuHandler} />
        <MobileMenu show={showMenu} />
        <Backdrop show={showMenu} clicked={showMobileMenuHandler} />
        <Routes>
          <Route 
            path='/account'
            element={<Account />}
          />
          <Route 
            path='/' 
            element={<Main />} 
          />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
