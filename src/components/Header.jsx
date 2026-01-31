import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../styles/Header.scss';
import { BiUserCircle } from 'react-icons/bi';

const Header = () => {
  return (
    <header className="header">
      <div className="header__left">
        <Link to="/" className="header__logo">
          BookMyShow
        </Link>
      </div>
      <nav className="header__center">
        <NavLink to="/now-playing" className={({ isActive }) => (isActive ? 'active' : '')}>Now Playing</NavLink>
        <NavLink to="/popular" className={({ isActive }) => (isActive ? 'active' : '')}>Popular</NavLink>
        <NavLink to="/top-rated" className={({ isActive }) => (isActive ? 'active' : '')}>Top Rated</NavLink>
        <NavLink to="/upcoming" className={({ isActive }) => (isActive ? 'active' : '')}>Upcoming</NavLink>
      </nav>
      <div className="header__right">
        <div className="header__user">
          <BiUserCircle size={24} />
          <span>Login</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
