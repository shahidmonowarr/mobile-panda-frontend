import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/shares/Footer/Footer';
import Header from './components/shares/Header/Header';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="contact-us" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
