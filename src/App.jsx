import React from 'react';
import { Home } from './components/Home/Home';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='*' element={<h1>404: Page not found</h1>} />
        <Route path='/' element={<Home/>} />
      </Routes>
    </BrowserRouter>
  )
}

