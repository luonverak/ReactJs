import React from 'react';
import './style/App.css';
import HeaderPage from './views/HeaderPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SlideShow from './views/SlideShow';
import Footer from './views/Footer';
import CategoryProduct from './views/CategoryPage';
function App() {
  return (
    <>
      <BrowserRouter>
        <HeaderPage />
        <Routes>
          <Route index element={<SlideShow />} />
          <Route path='/category' element={<CategoryProduct />} />
        </Routes>
        <CategoryProduct />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
