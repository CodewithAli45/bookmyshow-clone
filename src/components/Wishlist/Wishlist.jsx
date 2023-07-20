import React, { useContext } from 'react';
import { Contextdetails } from '../Context/MyContext';
import { Navbar } from '../Navbar/Navbar';
import './Wishlist.css'

export const Wishlist = () => {

    const GlobalState = useContext(Contextdetails);
    const state = GlobalState.state;
    const dispatch = GlobalState.dispatch;

    localStorage.setItem("wishlist", JSON.stringify(state));

    return (
        <>
            <Navbar />
            <h1 className='wishlist'>Wishlist page</h1>
            <div className="wish-bar">
            {
                state.map((movie) => (
                    <div className="wished-movies" key={movie.id}>
                        <div className="wished-left-card">
                            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
                        </div>
                        <div className="wished-btn">
                            <button className="wished-btn2" onClick={() => (dispatch({type: 'REMOVE', payload : movie}))}>Remove</button>
                        </div>
                    </div>  
                ))
            }
            </div>
        </>
    );
}
