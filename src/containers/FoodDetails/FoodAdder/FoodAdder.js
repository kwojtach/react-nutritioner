import React, { Component } from 'react';

import classes from './FoodAdder.scss';

class FoodAdder extends Component {
  render() {
    return (
      <form className={classes.FoodAdder} action="">
        <input type="number" value="100" step="1" min="1"/>
        <p>g</p>
        <button>
          <span>Add to the list</span>
        </button>
      </form>
    );
  }
}

export default FoodAdder;