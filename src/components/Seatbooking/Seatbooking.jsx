import React, {useState} from 'react';
import { Navbar } from '../Navbar/Navbar';
import { useNavigate } from 'react-router-dom';
import './Seatbooking.css'

export const Seatbooking = () => {
    const [seats, setSeats] = useState(Array(100).fill(false));
    const navigate = useNavigate();

    const email = localStorage.getItem('email');
    const pass = localStorage.getItem('pass');

    const handleSeatClick = (index) => {
    const newSeats = [...seats];
    newSeats[index] = !newSeats[index];
    setSeats(newSeats);
  }

    const handleBookTicket = (e) => {
        // console.log(email, pass);
        e.preventDefault();
        if(email === '' || pass === ''){
            navigate('/signup');
        } else {
            navigate('/checkout')
        }
        console.log('sucess');
    }
    return (
        <div>
            <Navbar />
            <h1>Book Ticket</h1>
            <div className="part-one">
                <div className="booking-input">
                    <div className="cinema-name">
                        <label htmlFor='cinema'>Cinema</label>
                        <select>
                            <option value="pvr">PVR Pune</option>
                            <option value="inox">Metro INOX Cinema</option>
                        </select>
                    </div>
                    <div className="book-date">
                        <label htmlFor='book-date'>Booking Date</label>
                        <input type="date" id="book-date" />
                    </div>
                    <div className="time">
                        <label htmlFor='book-date'>Time</label>
                        <select>
                            <option value="time-1">11:00</option>
                            <option value="time-2">14:00</option>
                            <option value="time-3">17:00</option>
                            <option value="time-4">19:00</option>
                        </select>
                    </div>    
                </div>
            </div>
            <div className="part-two">
                <span className='trap-box-one'></span><span>N/A</span>
                <span className='trap-box-two'></span><span>Selected</span>
                <span className='trap-box-three'></span><span>Occupied</span>
            </div>
            <div className="part-three">
                <span className='screen'></span>
            </div>
            <div className="part-four">
                {seats.map((seat, index) => (
                    <div
                        key={index}
                        className={`box ${seat ? 'occupied' : ''}`}
                        onClick={() => {
                        if (!seat) {
                            handleSeatClick(index);
                        }
                        }}
                    >
                        {Math.floor(index / 10)}-{index % 10}
                    </div>
                    ))}
            </div>
            <div className="part-five">
                <button className='btn-seat' type='submit' onClick={handleBookTicket}>Submit</button>
            </div>
            
        </div>
    );
}
