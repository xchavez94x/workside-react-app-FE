import React, { useState, lazy, Suspense } from 'react';
import { Routes, Route } from "react-router-dom"
import Container from './components/Container';
import Navbar from './components/Navbar';
import './App.css';
import MobileMenu from './components/MobileMenu';
import Backdrop from './components/Backdrop';
import Loader from './components/Loader';

function App() {
  const [ showMenu, setShowMenu ] = useState(false)
  const  LazyMain  = lazy(() => {
    return import("./pages/Main")
  })
  const LazyAccount  = lazy(() => {
    return import("./pages/Account")
  })
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
              element={
                <Suspense fallback={<Loader />}>
                  <LazyAccount />
                </Suspense>
              }
            />
            <Route 
              path='/' 
              element={
                <Suspense fallback={<Loader />}>
                  <LazyMain />
                </Suspense>
              } 
            />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
