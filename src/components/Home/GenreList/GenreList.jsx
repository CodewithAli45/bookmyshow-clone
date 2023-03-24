import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './GenreList.css'


export function GenreList({onSelect}) {
  const [genres, setGenres] = useState([]);

  const url = 'https://api.themoviedb.org/3/genre/movie/list?api_key=30e385b7eb29dd214d2362ad4b5df3ac'
  useEffect(() => {
    const fetchGenre  = async () => {
      const response = await axios.get(url);
      setGenres(response.data.genres);
    }
    fetchGenre();
  }, []);
  
  
  return (
    <div>
      <h1>Genre</h1>
      <ul>
          {genres.map((genre) => (
            <li key={genre.id} className='list' >
              <button className='genre-button' onClick={() => onSelect(genre.id)}>{genre.name}</button>
            </li>
          ))}
      </ul>
    </div>
  )
}
