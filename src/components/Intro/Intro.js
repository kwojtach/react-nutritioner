import React from 'react';

import classes from './Intro.scss';

const intro = (props) => {
  return (
    <div className={classes.Intro}>
      <h2>Welcome to Nutritioner!</h2>
      <p>
        With this app you can create nutrition plan with ease.
        It's simple as:
      </p>
      <ul>
        <li>
          <span>1</span>
          <p>Search for food</p>
        </li>
        <li>
          <span>2</span>
          <p>Click on result that matches your request</p>
        </li>
        <li>
          <span>3</span>
          <p>Choose weight of the food and add it to your plan</p>
        </li>
        <li>
          <span>4</span>
          <p>Modify your plan as you wish to</p>
        </li>
        <li>
          <span>5</span>
          <p>Print your plan if you like to</p>
        </li>
      </ul>
    </div>
  )
};

export default intro;