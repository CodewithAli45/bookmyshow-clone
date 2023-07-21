import React, { useState } from 'react';
import { useNavigate, Link} from 'react-router-dom'
import './LoginSignup.css'
import { Navbar } from '../Navbar/Navbar';

export function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isError, setIsError] = useState(false);

    const navigate = useNavigate();
    const handleSignupform = (e) => {
        e.preventDefault();
        const originalUser = localStorage.getItem("email");
        const originalPass = localStorage.getItem("pass");
    
        if(originalUser === email && originalPass === password){
          console.log("you logged in");
          setIsError(false);
          localStorage.setItem("loggedInUser", `${email} ${password}`);
          navigate('/');
        }else{
          setIsError(true);
        }
        console.log("you cliked me", email, password);
    }

  return (
    <div>
        <Navbar />
        <div className='wrapper'>
        <form onSubmit={handleSignupform} className='forms'>
            <h2>Login</h2>
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
                    type="password" 
                    id="password" required
                    placeholder='password' 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                />
            </div>
            {
                isError && <p>Please enter correct username and password</p>
            }
            <button type='submit'>Submit</button>
        </form>
        <Link to='/signup'><button className='registerBtn' type='submit'>Register</button></Link>
    </div>
    </div>
    
  )
}
