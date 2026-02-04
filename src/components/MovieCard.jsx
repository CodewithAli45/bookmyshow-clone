import React from 'react';
import '../styles/MovieCard.scss';
import { motion } from 'framer-motion';
import { BiStar } from 'react-icons/bi'; // Added for BiStar icon

const IMG_BASE_URL = 'https://image.tmdb.org/t/p/w500';

const MovieCard = ({ movie, onClick, className }) => {
  // Removed duplicate IMG_BASE_URL definition here as it's already defined globally

  const formatDate = (dateStr) => {
    if (!dateStr) return 'N/A';
    const [year, month, day] = dateStr.split('-');
    return `${day}-${month}-${year}`;
  };

  const title = movie.title || movie.name;
  const releaseDate = movie.release_date || movie.first_air_date;

  return (
    <motion.div 
      className={`movie-card ${className || ''}`}
      onClick={() => onClick(movie)}
      layout
    >
      <div className="movie-card__poster">
        <img 
          src={movie.poster_path ? `${IMG_BASE_URL}${movie.poster_path}` : 'https://via.placeholder.com/500x750?text=No+Image'} 
          alt={title} 
        />
        <div className="movie-card__rating">
          <BiStar />
          <span>{movie.vote_average?.toFixed(1) || '0.0'}</span>
        </div>
      </div>
      <div className="movie-card__info">
        <h3>{title}</h3>
        <p>{formatDate(releaseDate)}</p> 
      </div>
    </motion.div>
  );
};

export default MovieCard;
