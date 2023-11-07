import React from 'react';
import './style/App.css';
import HeaderPage from './views/HeaderPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SlideShow from './views/SlideShow';
import Footer from './views/Footer';
function App() {
  return (
    <>
      <BrowserRouter>
        <HeaderPage/>
        <Routes>
          <Route path='/' element={<SlideShow/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
