import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';

import Manatee from './pages/Manatee/Manatee';
import Narwhal from './pages/Narwhal/Narwhal';

function App() {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <h1>Marine Mammals</h1>
        <nav>
          <ul>
            <li><Link to="/manatee">Manatee</Link></li>
            <li><Link to="/narwhal">Narwhal</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/manatee" element={<Manatee />} />
          <Route path="/narwhal" element={<Narwhal />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
