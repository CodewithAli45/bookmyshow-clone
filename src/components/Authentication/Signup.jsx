import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import { Navbar } from '../Navbar/Navbar';
import './LoginSignup.css'

export function Signup() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isSignedup, setIsSignedup] = useState(false);
  
    const navigate = useNavigate();

    const handleSignupform = (e) => {
        e.preventDefault();
        localStorage.setItem('profile', name);
        localStorage.setItem("email", email);
        localStorage.setItem("pass", password);
        // console.log("you cliked", password, name, email);

        setIsSignedup(true);
    }

    useEffect(() => {
        if (isSignedup) {
          navigate('/login');
        }
    }, [isSignedup, navigate]);

  return (
    <div>
        <Navbar />
       <div className='wrapper'>
        {
            !isSignedup && 
            <form onSubmit={handleSignupform} className='forms'>
            <h2>Sign up</h2>
            <div className='display-tag'>
                <label htmlFor="name">Name</label>
                <input 
                    type="text" 
                    id="name" 
                    placeholder='full name' 
                    value={name} required
                    onChange={(e) => setName(e.target.value)} 
                />
            </div>
            <div className='display-tag'>
                <label htmlFor="email">Email</label>
                <input 
                    type="email" 
                    id="email" required
                    placeholder='email' 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                />
            </div>
            <div className='display-tag'>
                <label htmlFor="password">Password</label>
                <input 
                    type="password" required
                    id="password" 
                    placeholder='password' 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                />
            </div>
            <button type='submit'>Submit</button>
        </form>
        }
        
    </div> 
    </div>
    
  )
}
