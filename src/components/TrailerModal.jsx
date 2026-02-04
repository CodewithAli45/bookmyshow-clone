import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoClose } from 'react-icons/io5';
import { getMovieVideos, getTVVideos } from '../api';
import '../styles/TrailerModal.scss';

const TrailerModal = ({ movie, onClose }) => {
  const [videoKey, setVideoKey] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVideo = async () => {
      try {
        setLoading(true);
        const isTV = !!(movie.name || movie.first_air_date);
        const response = isTV 
          ? await getTVVideos(movie.id) 
          : await getMovieVideos(movie.id);
        
        const videos = response.data.results;
        // Find trailer or teaser
        const trailer = videos.find(v => v.type === 'Trailer') || videos.find(v => v.type === 'Teaser');
        if (trailer) {
          setVideoKey(trailer.key);
        }
      } catch (error) {
        console.error("Failed to fetch trailer", error);
      } finally {
        setLoading(false);
      }
    };
    if (movie) fetchVideo();
  }, [movie]);

  if (!movie) return null;

  return (
    <div className="trailer-overlay" onClick={onClose}>
      <motion.div 
        className="trailer-content"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="close-btn" onClick={onClose}>
          <IoClose size={28} />
        </button>
        
        <div className="video-container">
          {loading ? (
            <div className="video-loading">Loading Trailer...</div>
          ) : videoKey ? (
            <iframe
              src={`https://www.youtube.com/embed/${videoKey}?autoplay=1`}
              title="Movie Trailer"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          ) : (
            <div className="no-video">No trailer available for this movie.</div>
          )}
        </div>
        <div className="trailer-info">
            <h3>{movie.title}</h3>
        </div>
      </motion.div>
    </div>
  );
};

export default TrailerModal;
