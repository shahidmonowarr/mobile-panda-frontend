import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import BackToTop from './components/shares/BackToTop/BackToTop';
import Footer from './components/shares/Footer/Footer';
import Header from './components/shares/Header/Header';
import Login from './pages/Authentication/Login/Login';
import Register from './pages/Authentication/Register/Register';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <BackToTop />
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="contact-us" element={<Contact />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
