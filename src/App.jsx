import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import NowPlaying from './pages/NowPlaying';
import Popular from './pages/Popular';
import TopRated from './pages/TopRated';
import Upcoming from './pages/Upcoming';
import WatchTrailer from './pages/WatchTrailer';

function App() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [selectedGenre, setSelectedGenre] = useState(null);

  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);
  const closeDrawer = () => setIsDrawerOpen(false);

  return (
    <BrowserRouter>
      <div className="app-container">
        <Header onMenuClick={toggleDrawer} />
        <div className="main-layout-wrapper">
          <Sidebar 
            isOpen={isDrawerOpen} 
            onClose={closeDrawer} 
            selectedGenre={selectedGenre} 
            onGenreSelect={setSelectedGenre} 
          />
          <main className="main-content-area">
            <Routes>
              <Route path="/" element={<Navigate to="/now-playing" replace />} />
              <Route path="/now-playing" element={<NowPlaying selectedGenre={selectedGenre} />} />
              <Route path="/popular" element={<Popular selectedGenre={selectedGenre} />} />
              <Route path="/top-rated" element={<TopRated selectedGenre={selectedGenre} />} />
              <Route path="/upcoming" element={<Upcoming selectedGenre={selectedGenre} />} />
              <Route path="/watch-trailer" element={<WatchTrailer />} />
            </Routes>
          </main>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
