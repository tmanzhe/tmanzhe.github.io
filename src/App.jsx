import React from 'react';
import Header from './jsx/Header';
import Footer from './jsx/Footer';
import Home from './pages/Home';
import Life from './pages/Life';
import Mouse from './jsx/Mouse';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
/* this was annoying*/

function App() {
  return (
    <Router>
      <div id="root">
        <Mouse />
        <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/life" element={<Life />} />
          </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
