import React from 'react';
import '../styles/MovieCard.scss';
import { motion } from 'framer-motion';

const IMG_BASE_URL = 'https://image.tmdb.org/t/p/w500';

const MovieCard = ({ movie, onClick }) => {
  const formatDate = (dateStr) => {
    if (!dateStr) return 'N/A';
    const [year, month, day] = dateStr.split('-');
    return `${day}-${month}-${year}`;
  };

  return (
    <motion.div 
      className="movie-card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.05 }}
      onClick={onClick}
    >
      <div className="movie-card__poster">
        <img 
          src={movie.poster_path ? `${IMG_BASE_URL}${movie.poster_path}` : 'https://via.placeholder.com/500x750?text=No+Image'} 
          alt={movie.title} 
        />
        <div className="movie-card__rating">
            <span>⭐ {movie.vote_average?.toFixed(1)}</span>
        </div>
      </div>
      <div className="movie-card__info">
        <h3>{movie.title}</h3>
        <p>{formatDate(movie.release_date)}</p> 
      </div>
    </motion.div>
  );
};

export default MovieCard;
