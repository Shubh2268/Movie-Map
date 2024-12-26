import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router';
import HomePage from './pages/HomePage';
import DetailsPage from './pages/DetailsPage';
import SearchPage from './pages/SearchPage';
import ErrorPage from './pages/ErrorPage';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/movie' element={<HomePage />} />
        <Route path='/tv' element={<HomePage />} />
        <Route path='/details/:mediaType/:id' element={<DetailsPage />} />
        <Route path='/search' element={<SearchPage />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
