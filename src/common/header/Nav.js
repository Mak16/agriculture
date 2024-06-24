import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="main-menu text-center">
      <nav id="mobile-menu">
        <ul>
          <li>
            <Link to="/">Accueil</Link>
            
          </li>
          <li>
            <Link to="/about">Apropos</Link>
          </li>
          <li>
            <Link to="/service-one">Services</Link>
            
          </li>
          <li>
            <Link to="/gallery">Gallerie</Link>
           
          </li>
          <li>
            <Link to="/blog">Nos Produits</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
