import React from 'react';
import Home from '../components/Home';
import { getUpcoming } from '../api';
import '../styles/Upcoming.scss';

const Upcoming = () => {
  return <Home fetchMovies={getUpcoming} />;
};

export default Upcoming;
