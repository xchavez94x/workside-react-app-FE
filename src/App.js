import React, { useState, lazy, Suspense, useEffect } from 'react';
import { Routes, Route } from "react-router-dom"
import Container from './components/Container';
import Navbar from './components/Navbar';
import MobileMenu from './components/MobileMenu';
import Backdrop from './components/Backdrop';
import Loader from './components/Loader';
import SuspenseContainer from './HOC/Suspense';
import { getJobs } from './services/jobs.service';
import './App.css';

function App() {
  useEffect(() => {
    console.log('App mounted')
  }, [])
  const [ showMenu, setShowMenu ] = useState(false)
  const  LazyMain  = lazy(() => {
    return import("./pages/Main")
  })
  const LazyAccount  = lazy(() => import("./pages/Account"))
  const LazySearch = lazy(() => import('./components/Search'));
  useEffect(() => {
    getJobs()
    .then( result => console.log(result))
  })

  const LazyPostJob = lazy(() => import('./pages/PostJob'));
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
              path='/post-job' 
              element={
                <SuspenseContainer fallBackComponent={<Loader />}>
                  <LazyPostJob />
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
            <Route path='/post-job' element={
              <Suspense fallback={<Loader />}>
                <LazyPostJob />
              </Suspense>
            } />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
