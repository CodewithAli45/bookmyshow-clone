import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './GenreList.css'
import {apiKey} from '../../../api'

export function GenreList({onSelect}) {
  const [genres, setGenres] = useState([]);

  const url = `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`
  useEffect(() => {
    const fetchGenre  = async () => {
      const response = await axios.get(url);
      setGenres(response.data.genres);
    }
    fetchGenre();
  }, [url]);
  
  
  return (
    <div>
      <h1 className='genreh1'>Genre</h1>
      <ul className='genrelist'>
          {genres.map((genre) => (
            <li key={genre.id} className='list' >
              <button className='genre-button' onClick={() => onSelect(genre.id)}>{genre.name}</button>
              <button className='genre-buttonResponsive' onClick={() => onSelect(genre.id)}>{genre.name}</button>
            </li>
          ))}
      </ul>
    </div>
  )
}
