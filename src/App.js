import React, { useState, lazy, useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import Container from './components/Container';
import Navbar from './components/Navbar';
import MobileMenu from './components/MobileMenu';
import Backdrop from './components/Backdrop';
import Loader from './components/Loader';
import SuspenseContainer from './HOC/Suspense';
import { getJobs } from './services/jobs.service';
import './App.css';

function App() {
  const [ showMenu, setShowMenu ] = useState(false)
  const  LazyMain  = lazy(() => {
    return import("./pages/Main")
  })
  const LazyAccount  = lazy(() => import("./pages/Account"))
  const LazyPostJob  = lazy(() => import("./pages/PostJob"))
  const LazySearch = lazy(() => import('./components/Search'));
  const showMobileMenuHandler = () => setShowMenu( prevShow => !prevShow) 
  useEffect(() => {
    getJobs()
    .then( result => console.log(result))
  })
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
            <Route path='/search-jobs' element={
              <SuspenseContainer fallBackComponent={<Loader />} >
                <LazySearch />
              </SuspenseContainer>
            } />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
