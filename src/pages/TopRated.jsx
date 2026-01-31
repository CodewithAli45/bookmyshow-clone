import React from 'react';
import Home from '../components/Home';
import { getTopRated } from '../api';
import '../styles/TopRated.scss';

const TopRated = () => {
  return <Home fetchMovies={getTopRated} />;
};

export default TopRated;
