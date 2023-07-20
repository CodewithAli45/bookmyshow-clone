import React, { useState } from 'react';
import { Navbar } from '../Navbar/Navbar';
import { useNavigate } from 'react-router-dom';
import './Checkout.css';
import './ModalCheck'

export const Checkout = () => {
    const [ticketNo, setNoTicket] = useState(null);

    const randomNumber = Math.floor(Math.random() * 50) + 250;
    const navigate = useNavigate();
    const handleFee = (e) => {
        setNoTicket(e.target.value);
        
    }
    let fee = randomNumber * 1.75/100 * ticketNo;
    let total = randomNumber + randomNumber * 1.75/100 * ticketNo;

    const handleCheckout = () => {
        console.log('checkout');
        navigate('/checkout/modal')
    }

    return (
        <div>
            <Navbar />
            <h1>Checkout</h1>
            <div className="container" >
                <div className="summary-section" >
                    <h2>Summary</h2> 
                    <h3 >Movie title</h3>
                    <div className="movie-price">
                        <p>Classic Ticket</p>
                        <p>&#8377; {randomNumber}</p>
                    </div>
                    <div className="tickets">
                        <label htmlFor="ticket">No. of Ticket</label>
                        <input type="number" value={ticketNo} onChange={handleFee} id="ticket" />
                    </div>
                    <div className="fee">
                        <p>Convience Fee (@1.75%)</p>
                        <p>&#8377; {fee.toFixed(2)}</p>
                    </div>
                    <div className="total">
                        <p>Total</p>
                        <p>&#8377;{total}</p>
                    </div>
                </div>
                <div className="payment-section">
                    <h2>Payment</h2>
                    <div className="payment-form">
                        <label htmlFor="fname">First Name</label>
                        <input type="text"id="fname" required={true}/>
                        <label htmlFor="lname">Last Name</label>
                        <input type="text"id="lname" required/>
                        <label htmlFor="email">Email</label>
                        <input type="email"id="email" required/>
                    </div>
                    <div className="payment-option">
                        <input type="checkbox"/>
                        <label htmlFor="credit">Credit Card</label>
                        <input type="checkbox"/>
                        <label htmlFor="debit">Debit Card</label>
                        <input type="checkbox"/>
                        <label htmlFor="upi">UPI</label>
                    </div>
                    <div className="card-details">
                        <label htmlFor="fullname">Full Name</label>
                        <input type="text"id="fullname" placeholder='full name as displaced on card' required />
                        <label htmlFor="cardNumber">Card Number</label>
                        <input type="cardNumber"id="cardNumber" placeholder='enter card number' required/>
                        <label htmlFor="expiry">Expiry</label>
                        <input type="text"id="expiry" placeholder='expiry month'required />
                    </div>
                    <div className="pay-button">
                        <button className='pay-btn' onClick={handleCheckout}>Proceed for Payment</button>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}
