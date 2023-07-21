import React, {useState, useContext} from 'react';
import './Navbar.css';
import { Contextdetails } from '../Context/MyContext';
import {Link, useNavigate} from 'react-router-dom'
import {AiFillHeart} from 'react-icons/ai';
import {FaUserAlt} from 'react-icons/fa'

export function Navbar({searchQuery, setSearchQuery, setSearchButtonClicked}) {
    const [profile, setProfile] = useState(false);

    const GlobalState = useContext(Contextdetails);
    const navigate = useNavigate();

    const name = localStorage.getItem('profile');
    const loggedInUser = localStorage.getItem('loggedInUser');
    
    const handleSearch = (e) => {
        e.preventDefault();
        setSearchQuery(e.target.value);
    }

    const handleButton = (e) => {
        e.preventDefault();
        setSearchButtonClicked(true);
    }
    const handleProfileClick = (e) => {
        e.preventDefault();
        if (!loggedInUser) {
        navigate('/signup'); // user not registered, redirect to signup page
        } else {
        setProfile(!profile);
        navigate('/login');
        }
        console.log(name);
    }

  return (
    <>
    <nav className='navbar'>
        <div className="left" >
            <Link to="/">
                <img className='left-image' src={'./mylogo.png'} alt="Bookmyshow" />
            </Link>
        </div>
        <div className="right">
            <div className="search-box">
                <input className="search-box-input" type="text" value={searchQuery} onChange={handleSearch} placeholder='search' id="movie" />
                <button className='nav-button' type='submit' onClick={handleButton}>Search</button>
            </div>
            <Link to='/wishlist'>
                <AiFillHeart className={`whislist ${GlobalState.state.length > 0 ? 'red-wished': ""}`} />
            </Link>
            
            <div className="user">
                    <FaUserAlt onClick={handleProfileClick} /> 
                <span>{profile ? name : 'Profile'}</span>
            </div>
        </div>
    </nav>
    <nav className="navbar-responsive">
        <div className="left" >
            <Link to="/">
                <img className='left-image' src={'logo.png'} alt="Bookmyshow" />
            </Link>
            <div className="wishlist">
                <Link to='/wishlist'>
                    <AiFillHeart className={`whislist ${GlobalState.state.length > 0 ? 'red-wished': ""}`} />
                </Link>
            </div>
            <div className="user">
                <FaUserAlt onClick={handleProfileClick} /> 
                <span>{profile}</span>
            </div>
        </div>
        <div className="search-box">
            <input className="search-box-input" type="text" value={searchQuery} onChange={handleSearch} placeholder='search' id="movie2" />
            <button className='nav-button' type='submit' onClick={handleButton}>Search</button>
        </div>
    </nav>
    </>
  )
}
