import React from 'react';

import classes from './FoodAdder.scss';

const foodAdder = (props) => {
  return (
    <form className={classes.FoodAdder} action="">
      <input value={props.weight} type="number" onChange={(event) => props.onChangeWeight(event)} min="1"/>
      <p>g</p>
      <button>
        <span>Add to the list</span>
      </button>
    </form>
  );
};

export default foodAdder;