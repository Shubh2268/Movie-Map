import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router';
import HomePage from './pages/HomePage';
import DetailsPage from './pages/DetailsPage';
import ErrorPage from './pages/ErrorPage';

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path='details/:id' element={<DetailsPage />} />
        <Route path='/*' element={<ErrorPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App;
