import React, { useEffect, useState } from 'react';
import {Moviecard} from './Movie/Moviecard'
import './Nowplaying.css';
import { Moviedescription } from '../../Moviedescription/Moviedescription';


export function Nowplaying({genreId}) {
    const [movie, setMovie] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState(null);

    useEffect(() => {
        let apiUrl = 'https://api.themoviedb.org/3/movie/now_playing?api_key=30e385b7eb29dd214d2362ad4b5df3ac'

        if(genreId){
            apiUrl += `&with_genres=${genreId}`
        }
        fetch(apiUrl)
        .then(response => response.json())
        .then((data) => {
            console.log("clicked at genre", genreId);
            setMovie(data.results);
        })
    }, [genreId]);

    const handleMovieClick = (movie) => {
        setSelectedMovie(movie);
    };

    const handleCloseClick = () => {
        setSelectedMovie(null);
    };

  return (
        <div className='movie-box'>
            {
                movie.map((film) => (
                    <div  key={film.id} onClick={() => handleMovieClick(movie)}>
                        <Moviecard className='film' movies={film} />
                    </div>
                ))
            }
            {
                selectedMovie && (
                <Moviedescription movie={selectedMovie} onClose={handleCloseClick} />
            )}
        </div>
  )
}

