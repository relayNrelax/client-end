import React from 'react';
import GlobalStyle from './global-styles';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Navbar from './components/Navbar/Navbar';
import Register from './pages/Register';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Navbar/>
      <Routes>
        <Route path='/' exact element={<Home/>} />
        <Route path='/register' exact element={<Register/>} />
        <Route path='/login' exact element={<Login/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
