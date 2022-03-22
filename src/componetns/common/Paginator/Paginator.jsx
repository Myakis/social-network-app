import classes from './Paginator.module.css';
import React, { useState } from 'react';
import arrowLeft from '../../../assets/img/leftArrow.svg';

const Paginator = ({ changePage, currentPage, usersCount, totalItemsCount, portionSize = 10, loading }) => {
  const countPage = Math.ceil(totalItemsCount / usersCount);
  const allCountPage = [];
  for (let i = 1; i <= countPage; i++) {
    allCountPage.push(i);
  }
  const portionCount = Math.ceil(countPage / portionSize);
  const [portionNum, setPortionNum] = useState(1);
  const leftPortionPageNum = (portionNum - 1) * portionSize + 1;
  const rightPortionPageNum = portionNum * portionSize;
  const prevPage = () => {
    setPortionNum(portionNum - 1);
    changePage(leftPortionPageNum - 1);
  };
  const nextPage = () => {
    setPortionNum(portionNum + 1);
    changePage(1 + rightPortionPageNum);
  };

  return (
    <div className={classes.paginatonPage}>
      <div className={classes.paginatonWrapper}>
        {leftPortionPageNum > 1 && (
          <button
            className={`${classes.buttonPrev}  ${classes.buttonPagination}`}
            disabled={loading}
            onClick={() => {
              prevPage();
            }}>
            <img src={arrowLeft} alt='' />
          </button>
        )}

        {allCountPage
          .filter(p => p >= leftPortionPageNum && p <= rightPortionPageNum)
          .map(p => (
            <span
              key={p}
              onClick={() => p !== currentPage && changePage(p)}
              className={currentPage === p ? classes.activePage : ''}>
              {p}
            </span>
          ))}
        {portionCount > portionNum && (
          <button
            className={classes.buttonPagination}
            disabled={loading}
            onClick={() => {
              nextPage();
            }}>
            <img src={arrowLeft} alt='' />
          </button>
        )}
      </div>
    </div>
  );
};
export default Paginator;
