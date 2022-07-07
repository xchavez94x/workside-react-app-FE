import React from 'react';
import { Routes, Route } from "react-router-dom"

import Container from './components/Container';
import Navbar from './components/Navbar';
import Main from './pages/Main';
import './App.css';
import Account from './pages/Account';

function App() {
  return (
    <div className="App">
      <Container>
        <Navbar />
        <Routes>
          <Route 
            path='/' 
            element={<Main />} 
          />
          <Route 
            path='/account'
            element={<Account />}
          />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
