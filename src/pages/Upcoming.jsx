import React from 'react';
import Home from '../components/Home';
import { getUpcoming } from '../api';
import '../styles/Upcoming.scss';

const Upcoming = ({ selectedGenre }) => {
  return <Home fetchMovies={getUpcoming} selectedGenre={selectedGenre} />;
};

export default Upcoming;
