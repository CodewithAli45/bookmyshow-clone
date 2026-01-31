import React from 'react';
import Home from '../components/Home';
import { getTopRated } from '../api';
import '../styles/TopRated.scss';

const TopRated = ({ selectedGenre }) => {
  return <Home fetchMovies={getTopRated} selectedGenre={selectedGenre} />;
};

export default TopRated;
