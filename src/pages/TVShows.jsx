import React, { useState, useEffect } from 'react';
import { getTopTVShows, searchTVShows, getTVVideos } from '../api';
import MovieCard from '../components/MovieCard';
import { AnimatePresence } from 'framer-motion';
import MovieDetailsModal from '../components/MovieDetailsModal';
import TrailerModal from '../components/TrailerModal';
import Pagination from '../components/Pagination';
import '../styles/Home.scss';
import { BiSort, BiSearch } from 'react-icons/bi';

const TVShows = () => {
  const [shows, setShows] = useState([]);
  const [filteredShows, setFilteredShows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedShow, setSelectedShow] = useState(null);
  const [trailerShow, setTrailerShow] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOrder, setSortOrder] = useState('auto'); // 'auto', 'name', 'date'

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        let response;
        if (searchQuery.trim()) {
          response = await searchTVShows(searchQuery, currentPage);
        } else {
          response = await getTopTVShows(currentPage);
        }
        setShows(response.data.results);
        setTotalPages(Math.min(response.data.total_pages, 500));
        window.scrollTo(0, 0);
      } catch (error) {
        console.error("Failed to fetch TV shows", error);
      } finally {
        setLoading(false);
      }
    };

    const timer = setTimeout(() => {
      getData();
    }, searchQuery ? 500 : 0);

    return () => clearTimeout(timer);
  }, [currentPage, searchQuery]);

  useEffect(() => {
    let result = [...shows];
    
    // Apply Sorting
    if (sortOrder === 'name') {
      result.sort((a, b) => (a.name || '').localeCompare(b.name || ''));
    } else if (sortOrder === 'date') {
      result.sort((a, b) => new Date(b.first_air_date || 0) - new Date(a.first_air_date || 0));
    }
    
    setFilteredShows(result);
  }, [shows, sortOrder]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const cycleSort = () => {
    if (sortOrder === 'auto') setSortOrder('name');
    else if (sortOrder === 'name') setSortOrder('date');
    else setSortOrder('auto');
  };

  return (
    <div className="home-container">
      <main className="main-content">
        <div className="content-header">
          <div className="header-left">
            <button className={`sort-btn ${sortOrder !== 'auto' ? 'active' : ''}`} onClick={cycleSort}>
              <BiSort size={18} />
              <span>Sort: {sortOrder.charAt(0).toUpperCase() + sortOrder.slice(1)}</span>
            </button>
          </div>

          <div className="header-center">
            <div className="search-bar">
              <BiSearch size={20} />
              <input 
                type="text" 
                placeholder="Search TV shows..." 
                value={searchQuery}
                onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setCurrentPage(1);
                }}
              />
            </div>
          </div>

          <div className="header-right">
            <span className="page-info">Page {currentPage} of {totalPages}</span>
          </div>
        </div>

        {loading ? (
          <div className="loading">Loading...</div>
        ) : (
          <>
            <div className="movie-grid">
              {filteredShows.map((show) => (
                <MovieCard 
                  key={show.id} 
                  movie={show} 
                  onClick={() => setSelectedShow(show)}
                  className="tv-show-card"
                />
              ))}
            </div>

            <Pagination 
              currentPage={currentPage} 
              totalPages={totalPages} 
              onPageChange={handlePageChange} 
            />
          </>
        )}
      </main>

      <AnimatePresence>
        {selectedShow && (
          <MovieDetailsModal 
            movie={selectedShow} 
            onClose={() => setSelectedShow(null)}
            onWatchTrailer={() => {
              setTrailerShow(selectedShow);
              setSelectedShow(null);
            }}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {trailerShow && (
          <TrailerModal 
            movie={trailerShow} 
            onClose={() => setTrailerShow(null)} 
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default TVShows;
