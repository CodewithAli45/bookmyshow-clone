import React from 'react';
import Home from '../components/Home';
import { getNowPlaying } from '../api';
import '../styles/NowPlaying.scss';

const NowPlaying = () => {
  return <Home fetchMovies={getNowPlaying} />;
};

export default NowPlaying;
