import React from 'react';

import classes from './Pagination.scss';

const pagination = (props) => {
  return (
    <ul className={classes.Pagination}>
      {props.pageNumbers.map(number => {
        return (
          <li
            className={props.currentPage === number ? classes.Active : null}
            key={number}
            id={number}
            onClick={(event) => props.onPageChange(event)}
          >{number}
          </li>
        );
      })}
    </ul>
  )
};

export default pagination;