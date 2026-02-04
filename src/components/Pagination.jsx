import React from 'react';
import '../styles/Pagination.scss';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  // Logic to show a limited number of page buttons
  const getPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;
    
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
    
    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }
    
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }
    return pages;
  };

  if (totalPages <= 1) return null;

  return (
    <div className="pagination">
      <button 
        className="pagination__btn" 
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <BiChevronLeft size={24} />
      </button>

      {getPageNumbers().map(page => (
        <button
          key={page}
          className={`pagination__number ${currentPage === page ? 'active' : ''}`}
          onClick={() => onPageChange(page)}
        >
          {page}
        </button>
      ))}

      {totalPages > 5 && currentPage < totalPages - 2 && (
        <>
          <span className="pagination__dots">...</span>
          <button 
            className="pagination__number" 
            onClick={() => onPageChange(totalPages)}
          >
            {totalPages}
          </button>
        </>
      )}

      <button 
        className="pagination__btn" 
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <BiChevronRight size={24} />
      </button>
    </div>
  );
};

export default Pagination;
