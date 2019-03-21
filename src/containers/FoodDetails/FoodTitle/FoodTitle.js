import React from 'react';

import classes from './FoodTitle.scss';

const foodTitle = props => {
  return (
    <div className={classes.FoodTitle}>
      <h1>{props.title}</h1>
    </div>
  )
};

export default foodTitle;