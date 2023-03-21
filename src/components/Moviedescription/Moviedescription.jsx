import React from 'react';
import { AiFillStar } from'react-icons/ai'

export const Moviedescription = ({ movie, onClose }) => {
    console.log(movie.title);

    return (
        <div>
            <div className="movie-poster">
                <img src="" alt="" />
            </div>
            <div className="movie-name">
            {movie.title}
            </div>
            <div className="rating">
                <AiFillStar /> <span>Rating: {movie.vote_average}7.2/10</span>
            </div>
            <div className="lang">
            Language: {movie.original_language}
            </div>
            <div className="duration">
            Duration: {movie.runtime} minutes
            </div>
            <div className="genre">
            Genres: 
            {/* {movie.genres.map((genre) => genre.name).join(', ')} Overview: {movie.overview} */}
            </div>
            <div className="description">

            </div>
            <div className="price">
            Price: $10
            </div>
            <button>Buy</button>
            <button>Wishlist</button>
            <button onClick={onClose}>Close</button>
        </div>
    );
}
