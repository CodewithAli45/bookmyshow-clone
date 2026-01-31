import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { IoClose } from 'react-icons/io5';
import '../styles/MovieDetailsModal.scss';

const IMG_BASE_URL = 'https://image.tmdb.org/t/p/original';

const MovieDetailsModal = ({ movie, onClose }) => {
  // Close on Escape key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  if (!movie) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <motion.div 
        className="modal-content"
        initial={{ opacity: 0, scale: 0.8, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.8, y: 50 }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close-btn" onClick={onClose}>
          <IoClose size={28} />
        </button>

        <div className="modal-header">
          <img 
            src={movie.backdrop_path ? `${IMG_BASE_URL}${movie.backdrop_path}` : `${IMG_BASE_URL}${movie.poster_path}`} 
            alt={movie.title} 
            className="modal-backdrop"
          />
          <div className="modal-title-overlay">
            <h2>{movie.title}</h2>
            <div className="modal-meta">
              <span>⭐ {movie.vote_average?.toFixed(1)}</span>
              <span>•</span>
              <span>{movie.release_date?.split('-')[0]}</span>
            </div>
          </div>
        </div>

        <div className="modal-body">
          <h3>Overview</h3>
          <p>{movie.overview || "No overview available."}</p>
          
          <div className="modal-details">
            <div className="detail-item">
              <strong>Language:</strong>
              <span>{movie.original_language?.toUpperCase()}</span>
            </div>
            <div className="detail-item">
              <strong>Popularity:</strong>
              <span>{movie.popularity?.toFixed(0)}</span>
            </div>
            <div className="detail-item">
              <strong>Votes:</strong>
              <span>{movie.vote_count}</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default MovieDetailsModal;
