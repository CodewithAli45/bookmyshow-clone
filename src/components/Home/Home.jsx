import React, { useState } from 'react';
import { Nowplaying } from './Nowplaying/Nowplaying';
import { GenreList } from './GenreList/GenreList';
import { Navbar } from '../Navbar/Navbar';
import './Home.css';


export function Home() {
  
  const [selectedGenreId, setSelectedGenreId] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchButtonClicked, setSearchButtonClicked] = useState(false);

  const handleGenreSelect = (genreId) => {
    setSelectedGenreId(genreId);
  }

  return (
    <div>
      <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} setSearchButtonClicked={setSearchButtonClicked}/>
      <div className='landing-page'>
        <div className="sidebar">
          <GenreList onSelect={handleGenreSelect} />
        </div>
        <div className="nowplay">
          <h1>Now Playing</h1>
          <Nowplaying genreId={selectedGenreId} searchQuery={searchQuery} searchButtonClicked={searchButtonClicked} />
        </div>
      </div>
    </div>
  )
}
