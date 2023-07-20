import React from 'react';
import './Moviecard.css'

export function Moviecard({movies}) {
    const baseImageurl = `https://image.tmdb.org/t/p/w500/${movies.poster_path}`;
  return (
    <div className='movie-card'>
        <div className="poster">
           <img src={baseImageurl} alt={movies.original_title} /> 
        </div>
        <p className='movie-name'>{movies.original_title}</p>
        <div className="views">
            <span className='language'>{movies.original_language}</span>
            <span className='ratings'>{movies.vote_average}</span>
        </div>
        
    </div>
  )
}
