import React, { useEffect, useState } from 'react';
import '../styles/Sidebar.scss';
import { getGenres } from '../api';

const Sidebar = ({ onGenreSelect, selectedGenre }) => {
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

  return (
    <aside className="sidebar">
      <h3>Genres</h3>
      <ul className="genre-list">
        <li 
            className={!selectedGenre ? 'active' : ''}
            onClick={() => onGenreSelect(null)}
        >
            All
        </li>
        {genres.map((genre) => (
          <li 
            key={genre.id} 
            className={selectedGenre === genre.id ? 'active' : ''}
            onClick={() => onGenreSelect(genre.id)}
          >
            {genre.name}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
