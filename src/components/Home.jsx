import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import MovieCard from './MovieCard';
import '../styles/Home.scss';
import { motion, AnimatePresence } from 'framer-motion';

const Home = ({ fetchMovies }) => {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getMovies = async () => {
      try {
        setLoading(true);
        const response = await fetchMovies();
        setMovies(response.data.results);
        console.log(response.data.results);
        setFilteredMovies(response.data.results);
      } catch (error) {
        console.error("Error fetching movies:", error);
      } finally {
        setLoading(false);
      }
    };
    
    getMovies();
    setSelectedGenre(null); // Reset genre when category changes
  }, [fetchMovies]);

  useEffect(() => {
    if (selectedGenre === null) {
        setFilteredMovies(movies);
    } else {
        const filtered = movies.filter(movie => movie.genre_ids.includes(selectedGenre));
        setFilteredMovies(filtered);
    }
  }, [selectedGenre, movies]);

  return (
    <div className="home-container">
      <Sidebar onGenreSelect={setSelectedGenre} selectedGenre={selectedGenre} />
      <main className="main-content">
        {loading ? (
             <div className="loading">Loading...</div>
        ) : (
            <motion.div layout className="movie-grid">
            <AnimatePresence>
              {filteredMovies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </AnimatePresence>
            </motion.div>
        )}
      </main>
    </div>
  );
};

export default Home;
