import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


import Header from './components/Header/header.jsx';
import Footer from './components/Footer/footer.jsx';

import Home from './pages/Home/Home.jsx';
import AboutPage from './pages/AboutPage/AboutPage.jsx';
import Error from './pages/Error/error.jsx';
import House from './pages/House/index.jsx';






const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
    <Header />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/AboutPage" element={<AboutPage/>} />
          <Route path="/House/:id" element={<House />}/>
          <Route path="*" element={<Error/>} />
        </Routes> 
    <Footer />
    </Router>
  </React.StrictMode>
);

