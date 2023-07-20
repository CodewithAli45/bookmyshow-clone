import React from 'react';
import { Home } from './components/Home/Home';
import {HashRouter, Routes, Route} from 'react-router-dom'
import { Wishlist } from './components/Wishlist/Wishlist';
import { Seatbooking } from './components/Seatbooking/Seatbooking';
import { Signup } from './components/Authentication/Signup';
import {Login} from './components/Authentication/Login';
import { Checkout } from './components/Checkout/Checkout';
import { ModalCheck } from './components/Checkout/ModalCheck';
import './App.css';

export function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path='*' element={<h1>404: Page not found</h1>} />
        <Route path='/' element={<Home/>} />
        <Route path='/wishlist' element={<Wishlist />} />
        <Route path='/booking' element={<Seatbooking />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/checkout/modal' element={<ModalCheck />} />
      </Routes>
    </HashRouter>
  )
}

