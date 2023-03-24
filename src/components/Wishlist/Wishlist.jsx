import React, { useContext } from 'react';
import { Contextdetails } from '../Context/MyContext';
import { Navbar } from '../Navbar/Navbar';
import './Wishlist.css'

export const Wishlist = () => {

    const GlobalState = useContext(Contextdetails);
    const state = GlobalState.state;
    const dispatch = GlobalState.dispatch;

    localStorage.setItem("wishlist", JSON.stringify(state));
    // const handleRemove = () => {
    //     dispatch({type: 'REMOVE', payload : state});
    //     console.log('removed buton');
    // }

    return (
        <div>
            <Navbar />
            <h1 className='wishlist'>Wishlist page</h1>
            <div className="wrapping-wish">
           
            {
                state.map((movie) => {
                    return (
                        <div className="wished-movies" key={movie.id}>
                                <div className="wished-left-card">
                                    <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
                                </div>
                                <div className="wished-right-card">
                                    <h1>{movie.title}</h1>
                                    <p><span>Rating: </span> {movie.vote_average}/10</p>
                                    <p><span>Language:</span> {movie.original_language}</p>
                                    <div className="wished-btn">
                                        <button className="wished-btn2" 
                                        onClick={() => (dispatch({type: 'REMOVE', payload : movie}))}
                                        >Remove</button>
                                    </div>
                            </div>
                            </div>
                            
                    )
                })
            }
             </div>
        </div>
    );
}
