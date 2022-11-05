import React, { useState, lazy, Suspense, useEffect } from 'react';
import { Routes, Route } from "react-router-dom"
import Container from './components/Container';
import Navbar from './components/Navbar';
import MobileMenu from './components/MobileMenu';
import Backdrop from './components/Backdrop';
import Loader from './components/Loader';
import SuspenseContainer from './HOC/Suspense';
import './App.css';

function App() {
  useEffect(() => {
    console.log('App mounted')
  }, [])
  const [ showMenu, setShowMenu ] = useState(false)
  const  LazyMain  = lazy(() => import("./pages/Main"))
  const LazyAccount  = lazy(() => import("./pages/Account"))
  const LazySearch = lazy(() => import('./pages/SearchContainer'));
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
                <SuspenseContainer fallBackComponent={<Loader />}>
                  <LazyAccount />
                </SuspenseContainer>
              }
            />
            <Route 
              path='/' 
              element={
                <SuspenseContainer fallBackComponent={<Loader />}>
                  <LazyMain />
                </SuspenseContainer>
              } 
            />
            <Route path='/search-jobs' element={
              <Suspense fallback={<Loader />}>
                <LazySearch />
              </Suspense>
            } />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
