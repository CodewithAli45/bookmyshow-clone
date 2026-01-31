import React, { useEffect, useState } from 'react';
import MovieCard from './MovieCard';
import MovieDetailsModal from './MovieDetailsModal';
import '../styles/Home.scss';
import { motion, AnimatePresence } from 'framer-motion';

const Home = ({ fetchMovies, selectedGenre }) => {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    const getMovies = async () => {
      try {
        setLoading(true);
        const response = await fetchMovies();
        setMovies(response.data.results);
        setFilteredMovies(response.data.results);
      } catch (error) {
        console.error("Error fetching movies:", error);
      } finally {
        setLoading(false);
      }
    };
    
    getMovies();
  }, [fetchMovies]);

  useEffect(() => {
    if (selectedGenre === null) {
        setFilteredMovies(movies);
    } else {
        const filtered = movies.filter(movie => movie.genre_ids.includes(selectedGenre));
        setFilteredMovies(filtered);
    }
  }, [selectedGenre, movies]);

  // Listener for global genre selection from sidebar could be added via context or prop lifting.
  // For now, let's assume we might need to lift state higher if Sidebar is global.
  // Since Sidebar is now in App.jsx, we need a way to communicate.
  // I'll lift the genre state to App.jsx next.

  return (
    <div className="home-container">
      <main className="main-content">
        {loading ? (
             <div className="loading">Loading...</div>
        ) : (
            <motion.div layout className="movie-grid">
            <AnimatePresence mode="popLayout">
              {filteredMovies.map((movie) => (
                <MovieCard 
                    key={movie.id} 
                    movie={movie} 
                    onClick={() => setSelectedMovie(movie)}
                />
              ))}
            </AnimatePresence>
            </motion.div>
        )}
      </main>

      <AnimatePresence>
        {selectedMovie && (
          <MovieDetailsModal 
            movie={selectedMovie} 
            onClose={() => setSelectedMovie(null)} 
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Home;
