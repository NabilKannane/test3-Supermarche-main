import React from 'react';
import "./Navbar.css"
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (<>
    <h1>Test #3 : Full Stack Development - NodeJS</h1>
    <nav>
      <Link to="/revenuebrut">Revenue brut</Link>
      <Link to="/achats">Nombre total des achats</Link>
      <Link to="/rating">Moyenne de rating</Link>
    </nav>
    </>
  );
};

export default Navbar;
