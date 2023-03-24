import React, {useState, useContext} from 'react';
import './Navbar.css';
import { Contextdetails } from '../Context/MyContext';
import {Link, useNavigate} from 'react-router-dom'
import {AiFillHeart} from 'react-icons/ai';
import {FaUserAlt} from 'react-icons/fa'
import Mylogo from '../../mylogo.png';

export function Navbar({searchQuery, setSearchQuery, setSearchButtonClicked}) {
    const [profile, setProfile] = useState("Profile");

    const GlobalState = useContext(Contextdetails);
    const navigate = useNavigate();

    const name = localStorage.getItem('profile');
    const email = localStorage.getItem('email');
    const password = localStorage.getItem('pass');
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
        console.log(name, email, password, loggedInUser);
        if (name === null) {
            navigate('/signup'); // user not registered, redirect to signup page
        }
        else if(name !== '' && email !== '' && password !== ''){
            navigate('/login');
        }
        else if(loggedInUser !== null){
            setProfile(name);
        }
    }

  return (
    <nav className='navbar'>
        <div className="left" >
            <Link to="/">
                <img src={Mylogo} alt="Bookmyshow" />
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
                <span>{profile}</span>
            </div>
        </div>
    </nav>
  )
}
