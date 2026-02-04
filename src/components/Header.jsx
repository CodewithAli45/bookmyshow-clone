import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../styles/Header.scss';
import { BiUserCircle, BiMenu } from 'react-icons/bi';

const Header = ({ onMenuClick }) => {
  return (
    <header className="header">
      <div className="header__left">
        <button className="header__menu-btn mobile-only" onClick={onMenuClick}>
          <BiMenu size={28} />
        </button>
        <Link to="/" className="header__logo desktop-only">
          BookMyShow
        </Link>
      </div>

      <nav className="header__center desktop-only">
        <NavLink to="/now-playing" className={({ isActive }) => (isActive ? 'active' : '')}>Now Playing</NavLink>
        <NavLink to="/popular" className={({ isActive }) => (isActive ? 'active' : '')}>Popular</NavLink>
        <NavLink to="/top-rated" className={({ isActive }) => (isActive ? 'active' : '')}>Top Rated</NavLink>
        <NavLink to="/upcoming" className={({ isActive }) => (isActive ? 'active' : '')}>Upcoming</NavLink>
        <NavLink to="/tv-shows" className={({ isActive }) => (isActive ? 'active' : '')}>TV Shows</NavLink>
      </nav>

      <div className="header__center mobile-only">
        <Link to="/" className="header__logo">
          BookMyShow
        </Link>
      </div>

      <div className="header__right">
        <div className="header__user">
          <BiUserCircle size={28} />
          <span className="login-text">Login</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
