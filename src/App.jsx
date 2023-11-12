import React from 'react';
import './style/App.css';
import HeaderPage from './views/HeaderPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SlideShow from './views/SlideShow';
import Footer from './views/Footer';
import CategoryProduct from './views/CategoryPage';
import IndexPage from './views/IndexPage';
const App=()=> {
  return (
    <>
      <BrowserRouter>
        <HeaderPage />
        <Routes>
          <Route index element={<SlideShow />} />
          <Route path='/category' element={<CategoryProduct />} />
        </Routes>
        <IndexPage />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
