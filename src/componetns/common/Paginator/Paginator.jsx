import classes from './Paginator.module.css';
import React from 'react';

const Paginator = ({ numbersPage, changePage, currentPage }) => {
  return (
    <div className={classes.paginatonPage}>
      {numbersPage.map(countPage => (
        <span
          key={countPage}
          onClick={() => changePage(countPage)}
          className={currentPage === countPage ? classes.activePage : ''}>
          {countPage}
        </span>
      ))}
    </div>
  );
};
export default Paginator;
