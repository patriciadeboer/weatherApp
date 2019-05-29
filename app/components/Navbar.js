import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div id="navbar" className="row">
      <Link to="/">Home</Link>
      {/* <div id="menulist" className="row">
        <div className="link"><Link to="/robots">Robots</Link></div>
        <div className="link"><Link to="/projects">Projects</Link></div>
      </div> */}
    </div>
  );
};

export default Navbar;
