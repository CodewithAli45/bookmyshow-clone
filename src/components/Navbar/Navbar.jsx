import React, { useState } from 'react';
import './Navbar.css'
import {Link} from 'react-router-dom'
import {AiOutlineHeart} from 'react-icons/ai';
import {FaUserAlt} from 'react-icons/fa'
import Mylogo from '../../mylogo.png';

export function Navbar() {
    const [inputText, setIntputText] = useState("");

    const handleSearch = (e) => {
        e.preventDefault();
        setIntputText(e.target.value);
    }

    const handleButton = (e) => {
        e.preventDefault();
        console.log('searched');
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
                <input type="text" value={inputText} onChange={handleSearch} placeholder='search' id="movie" />
                <button className='nav-button' type='submit' onClick={handleButton}>Search</button>
            </div>
            <AiOutlineHeart className='whislist' />
            <div className="user">
                <FaUserAlt />
                <span>Ali Murtaza</span>
            </div>
        </div>
    </nav>
  )
}
