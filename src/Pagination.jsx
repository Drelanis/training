import React from 'react';

const Pagination = ({ currentPage, totalItems, goNext, goPrev, itemsPerPage }) => {
  const isPrevPageAvailable =
    currentPage === 1 ? (
      <button className="btn" disabled></button>
    ) : (
      <button className="btn" onClick={goPrev}>
        ←
      </button>
    );

  const isNextPageAvailable =
    currentPage === Math.ceil(totalItems / itemsPerPage) ? (
      <button className="btn" disabled></button>
    ) : (
      <button className="btn" onClick={goNext}>
        →
      </button>
    );

  return (
    <div className="pagination">
      {isPrevPageAvailable}
      <span className="pagination__page">{currentPage}</span>
      {isNextPageAvailable}
    </div>
  );
};

export default Pagination;
