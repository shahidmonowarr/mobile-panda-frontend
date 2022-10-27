import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/shares/Header/Header';
import Home from './pages/Home/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
