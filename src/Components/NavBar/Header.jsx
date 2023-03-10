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
    <div className="container">
      <HashRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/menu" element={<MenuComponent />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </HashRouter>
    </div>
  );
};
