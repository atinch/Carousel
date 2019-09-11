import React from 'react';

import './Pagination.css';

export default function Pagination({ itemCount, index, onPageClick }) {
  const pageCount = Math.ceil(itemCount / 4)
  const activePage = Math.ceil(index / 4)
  let pages = []

  const handleClick = (pageNumber) => {
    onPageClick((pageNumber - 1) * 4 + 1)
  }


  if (itemCount > 4) {
    for (let i = 1; i <= pageCount; i++) {
      pages.push(<button key={i} onClick={() => handleClick(i)} className={i === activePage ? 'Pagination-item Pagination-item_active' : 'Pagination-item'} >{i}</button>)
    }
  }

  return (
    <div className='Pagination'>
      {pages}
    </div>
  )
}