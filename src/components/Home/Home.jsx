import React, { useState } from 'react';
import { Nowplaying } from './Nowplaying/Nowplaying';
import { GenreList } from './GenreList/GenreList';
import { Navbar } from '../Navbar/Navbar';
import './Home.css';


export function Home() {
  
  const [selectedGenreId, setSelectedGenreId] = useState(null);

  const handleGenreSelect = (genreId) => {
    setSelectedGenreId(genreId);
    console.log('you clicked me');
  }

  return (
    <div>
      <Navbar />
      <div className='landing-page'>
        <div className="sidebar">
          <GenreList onSelect={handleGenreSelect} />
        </div>
        <div className="nowplay">
          <h1>Now Playing</h1>
          <Nowplaying genreId={selectedGenreId} />
        </div>
      </div>
    </div>
  )
}
