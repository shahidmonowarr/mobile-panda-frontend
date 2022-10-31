import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/shares/Footer/Footer';
import Header from './components/shares/Header/Header';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route path="/contact-us" element={<Contact />} />
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
