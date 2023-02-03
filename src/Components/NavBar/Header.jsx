import React from 'react';
import { BrowserRouter as HashRouter, Route, Routes } from 'react-router-dom';

import { About } from '../Content/About';
import { Contact } from '../Content/Contact';
import { Home } from '../Content/Home';
import { MenuComponent } from '../Content/MenuComponent';
import './Header.css';
import { Navbar } from './Navbar';

export const Header = () => {
  return (
    <HashRouter basename="CSB_Rajendranagar">
      <div className="container">
        <Navbar />
        <Routes>
          <Route path="/CSB_Rajendranagar" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/menu" element={<MenuComponent />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </HashRouter>
  );
};
