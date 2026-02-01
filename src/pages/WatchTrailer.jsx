import React, { useState, useEffect } from 'react';
import { getNowPlaying } from '../api';
import TrailerModal from '../components/TrailerModal';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/Home.scss'; // Reuse grid styles

const WatchTrailer = () => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        const response = await getNowPlaying();
        setMovies(response.data.results);
      } catch (error) {
        console.error("Failed to fetch movies", error);
      } finally {
        setLoading(false);
      }
    };
    fetchMovies();
  }, []);

  const IMG_BASE_URL = 'https://image.tmdb.org/t/p/w500';

  return (
    <div className="home-container">
      <main className="main-content">
        <h2 style={{ marginBottom: '20px', color: '#333' }}>Watch Trailers</h2>
        {loading ? (
          <div className="loading">Loading...</div>
        ) : (
          <div className="movie-grid">
            {movies.map((movie) => (
              <motion.div 
                key={movie.id} 
                className="movie-card trailer-view"
                whileHover={{ scale: 1.05 }}
                onClick={() => setSelectedMovie(movie)}
                style={{ cursor: 'pointer' }}
              >
                <div className="movie-card__poster">
                  <img src={`${IMG_BASE_URL}${movie.poster_path}`} alt={movie.title} />
                  <div className="play-overlay">
                    <div className="play-icon">▶</div>
                  </div>
                </div>
                <div className="movie-card__info">
                  <h3>{movie.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </main>

      <AnimatePresence>
        {selectedMovie && (
          <TrailerModal 
            movie={selectedMovie} 
            onClose={() => setSelectedMovie(null)} 
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default WatchTrailer;
