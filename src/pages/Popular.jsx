import React from 'react';
import Home from '../components/Home';
import { getPopular } from '../api';
import '../styles/Popular.scss';

const Popular = ({ selectedGenre }) => {
  return <Home fetchMovies={getPopular} selectedGenre={selectedGenre} />;
};

export default Popular;
