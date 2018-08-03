import React from 'react';

const Pagination = ({ itemsCount, pageSize, onPageChange, currentPage }) => {
  const pagesCount = Math.ceil(itemsCount / pageSize);
  if (pagesCount === 1) return null;
  const pages = Array.from({length: pagesCount}, (_, i) => i + 1);

  return ( 
    <nav>
      <ul className="pagination">
        {pages.map(page => (
          <li key={page} className={ page === currentPage ? 'page-item active' : 'page-item'}>
            <a className="page-link" onClick={() => onPageChange(page)}>{page}</a>
          </li>
        ))}
      </ul>
    </nav>
   );
}
 
export default Pagination;