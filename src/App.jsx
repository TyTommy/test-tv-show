import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ShowPage from './components/ShowPage';
import HomePage from './components/HomePage';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/show/:id" element={<ShowPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
