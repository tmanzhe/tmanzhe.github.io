import React from 'react';
import Header from './jsx/Header';
import Footer from './jsx/Footer';
import Home from './pages/Home';
import Life from './pages/Life';
import Mouse from './jsx/Mouse';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div id="root">
        <Mouse />
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/life" element={<Life />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
