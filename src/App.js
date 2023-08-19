import React from 'react';
import GlobalStyle from './global-styles';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Navbar/>
      <Routes>
        <Route path='/' exact element={<Home/>} />
        <Route path='/signup' exact element={<Signup/>} />
        <Route path='/login' exact element={<Login/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
