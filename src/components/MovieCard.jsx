import React from 'react';
import '../styles/MovieCard.scss';
import { motion } from 'framer-motion';

const IMG_BASE_URL = 'https://image.tmdb.org/t/p/w500';

const MovieCard = ({ movie }) => {
  return (
    <motion.div 
      className="movie-card"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.05 }}
    >
      <div className="movie-card__poster">
        <img 
          src={movie.poster_path ? `${IMG_BASE_URL}${movie.poster_path}` : 'https://via.placeholder.com/500x750?text=No+Image'} 
          alt={movie.title} 
        />
      </div>
      <div className="movie-card__info">
        <h3>{movie.title}</h3>
        <p>{movie.release_date}</p> 
        <div className="movie-card__rating">
            <span>⭐ {movie.vote_average}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default MovieCard;
