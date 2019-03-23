import React from 'react';

import classes from './FoodDetails.scss';

const foodDetails = (props) => {
  return (
    <>
      <table className={classes.FoodDetails}>
        <thead>
          <tr>
            <th>Proximates</th>
            <th>Value per 100g</th>
          </tr>
        </thead>
        <tbody>
        { props.details.proximates.map(proximate =>
          <tr>
            <td>{proximate.name} {proximate.name.slice(0,1)}</td>
            <td>{proximate.value} {proximate.unit}</td>
          </tr>) }
        </tbody>
      </table>
      <table className={classes.FoodDetails}>
        <thead>
          <tr>
            <th>Minerals</th>
            <th>Value per 100g</th>
          </tr>
        </thead>
        <tbody>
        { props.details.minerals.map(mineral =>
          <tr>
            <td>{mineral.name} {mineral.name.slice(0,1)}</td>
            <td>{mineral.value} {mineral.unit}</td>
          </tr>) }
        </tbody>
      </table>
    </>

  )
};

export default foodDetails;