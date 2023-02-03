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
          <Route exact path="/CSB_Rajendranagar" element={<Home />} />
          <Route path="/CSB_Rajendranagar/home" element={<Home />} />
          <Route path="/CSB_Rajendranagar/menu" element={<MenuComponent />} />
          <Route path="/CSB_Rajendranagar/about" element={<About />} />
          <Route path="/CSB_Rajendranagar/contact" element={<Contact />} />
        </Routes>
      </div>
    </HashRouter>
  );
};
