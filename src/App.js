import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from './pages/Home/Home';
import Carrinho from './pages/Carrinho/Carrinho';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route exact path="/carrinho" element={<Carrinho />}/>
      </Routes>
    </Router>
  );
}

export default App;
