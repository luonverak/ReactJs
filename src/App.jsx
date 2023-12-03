import React, { useState } from 'react';
import './style/App.css';
import HeaderPage from './views/HeaderPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './views/Footer';
import CategoryProduct from './views/Category/CategoryPage';
import IndexPage from './views/IndexPage';
import LoginForm from './views/auth/SignUp';
const App = () => {
  const [isShowLogin, setIsShowLogin] = useState(true);

  const handleLoginClick = () => {
    setIsShowLogin((isShowLogin) => !isShowLogin);
  };

  return (
    <>
      <BrowserRouter>
        <HeaderPage handleLoginClick={handleLoginClick} />
        <LoginForm isShowLogin={isShowLogin} />
        <Routes>
          <Route path='/category' element={<CategoryProduct />} />
          <Route index element={<IndexPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
