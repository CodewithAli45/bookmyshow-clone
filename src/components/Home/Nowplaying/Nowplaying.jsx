import React, { useContext, useEffect, useState } from 'react';
import { Moviecard } from './Movie/Moviecard';
import { useNavigate } from 'react-router-dom';
import { Contextdetails } from '../../Context/MyContext';
import './Nowplaying.css';
import {apiKey} from '../../../api.js'

export function Nowplaying({ genreId, searchQuery, searchButtonClicked }) {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const GlobalState = useContext(Contextdetails);
  const dispatch = GlobalState.dispatch;

  const navigate = useNavigate();

  useEffect(() => {
    let apiUrl = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}`;

    if (genreId) {
      apiUrl += `&with_genres=${genreId}`;
      
    }

    fetch(apiUrl)
      .then(response => response.json())
      .then((data) => {
        setMovies(data.results);
      });
  }, [genreId]);

  const randomNumber = Math.floor(Math.random() * 50) + 250;

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
    
  };

  const handleCloseClick = () => {
    setSelectedMovie(null);
  };

  const handleWishlist = () => {
    dispatch({type: 'ADD', payload : selectedMovie});
  }
  const handleBookTicket = () => {
    console.log('ticket book');
    navigate('booking')
    
  }

  let filteredMovies = movies;
  if (searchButtonClicked) {
    filteredMovies = movies.filter(movie => movie.title.toLowerCase().includes(searchQuery.toLowerCase()));
  }
 
  return (
    <div className="movie-box">
      {filteredMovies.map((movie) => (
        <div key={movie.id} onClick={() => handleMovieClick(movie)}>
          <Moviecard className="film" movies={movie} />
        </div>
      ))}

      {selectedMovie && (
        <div className="movie-details" key={selectedMovie.id}>
          <div className="movie-details-overlay" onClick={handleCloseClick} />
          <div className="movie-details-card">

            <div className="left-card">
                <img src={`https://image.tmdb.org/t/p/w500/${selectedMovie.poster_path}`} alt={selectedMovie.title} />
            </div>

            <div className="right-card">
                <h1>{selectedMovie.title}</h1>
                <p><span>Rating: </span> {selectedMovie.vote_average}/10</p>
                <p><span>Language:</span> {selectedMovie?.original_language}</p>
                <p><span>Release Date:</span> {selectedMovie.release_date}</p>
                <p className='overview'><span >Overview:</span>  {selectedMovie.overview}</p>
                <p><span>Price:</span> &#8377; {randomNumber} per Seat</p>
                <div className="btn">
                    <button onClick={handleBookTicket}>Book Ticket</button>
                    <button onClick={handleWishlist}>Wishlist</button>
                    <button onClick={handleCloseClick}>X</button>
                </div>
                
            </div>
            
          </div>
        </div>
      )}
    </div>
  );
}
