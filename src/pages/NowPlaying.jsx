import React from 'react';
import Home from '../components/Home';
import { getNowPlaying } from '../api';
import '../styles/NowPlaying.scss';

const NowPlaying = ({ selectedGenre }) => {
  return <Home fetchMovies={getNowPlaying} selectedGenre={selectedGenre} />;
};

export default NowPlaying;
