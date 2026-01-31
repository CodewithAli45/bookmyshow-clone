import React from 'react';
import Home from '../components/Home';
import { getPopular } from '../api';
import '../styles/Popular.scss';

const Popular = () => {
  return <Home fetchMovies={getPopular} />;
};

export default Popular;
