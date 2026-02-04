import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Sidebar.scss';
import { getGenres } from '../api';
import { motion, AnimatePresence } from 'framer-motion';
import { IoClose } from 'react-icons/io5';

const Sidebar = ({ onGenreSelect, selectedGenre, isOpen, onClose }) => {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const response = await getGenres();
        setGenres(response.data.genres);
      } catch (error) {
        console.error("Failed to fetch genres", error);
      }
    };
    fetchGenres();
  }, []);

  const handleGenreClick = (genreId) => {
    onGenreSelect(genreId);
    if (window.innerWidth < 768) {
      onClose();
    }
  };

  const categories = [
    { name: 'Now Playing', path: '/now-playing' },
    { name: 'Popular', path: '/popular' },
    { name: 'Top Rated', path: '/top-rated' },
    { name: 'Upcoming', path: '/upcoming' },
    { name: 'TV Shows', path: '/tv-shows' },
  ];

  return (
    <AnimatePresence>
      {(isOpen || window.innerWidth >= 768) && (
        <>
          {isOpen && <div className="sidebar-overlay" onClick={onClose} />}
          <motion.aside 
            className={`sidebar ${isOpen ? 'open' : ''}`}
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            exit={{ x: -300 }}
            transition={{ type: 'tween', duration: 0.3 }}
          >
            <div className="sidebar__header">
              <h3>Menus</h3>
              <button className="close-btn" onClick={onClose}>
                <IoClose size={24} />
              </button>
            </div>

            <nav className="category-list mobile-only">
              {categories.map((cat) => (
                <NavLink 
                  key={cat.path} 
                  to={cat.path} 
                  className={({ isActive }) => (isActive ? 'active' : '')}
                  onClick={onClose}
                >
                  {cat.name}
                </NavLink>
              ))}
            </nav>

            <hr className="sidebar-divider mobile-only" />

            <div className="genre-section">
              <h3>Genres</h3>
              <ul className="genre-list">
                <li 
                    className={!selectedGenre ? 'active' : ''}
                    onClick={() => handleGenreClick(null)}
                >
                    All
                </li>
                {genres.map((genre) => (
                  <li 
                    key={genre.id} 
                    className={selectedGenre === genre.id ? 'active' : ''}
                    onClick={() => handleGenreClick(genre.id)}
                  >
                    {genre.name}
                  </li>
                ))}
              </ul>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
};

export default Sidebar;
