import React from 'react';
import './style/App.css';
import HeaderPage from './views/HeaderPage';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <HeaderPage/>
      </BrowserRouter>
    </>
  );
}

export default App;
