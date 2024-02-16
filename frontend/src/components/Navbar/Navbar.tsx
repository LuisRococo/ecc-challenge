import React from 'react';
import './Navbar.scss';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar bg-neutral text-slate-50">
      <div className="container mx-auto">
        <div className="flex-1">
          <Link to={'/'} className="btn btn-ghost text-xl">
            OHM Calculator
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to={'/'}>Calculator</Link>
            </li>
            <li>
              <Link to={'/formulas'}>Formulas</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
