import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/header';
import Home from './components/home/home';
import Category from './components/categories/categories';

function App() {
  return (
    <div className="container">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Category />} />
      </Routes>
    </div>
  );
}

export default App;
