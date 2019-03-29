import React, { Component } from 'react';

import classes from './FoodPlan.scss';

class FoodPlan extends Component {
  render() {
    return (
      <table className={classes.FoodPlan}>
        <thead>
          <tr>
            <th>Food</th>
            <th>Weight [g]</th>
            <th>E [kcal]</th>
            <th>P [g]</th>
            <th>F [g]</th>
            <th>C [g]</th>
          </tr>
        </thead>
        <tbody>
          <tr >
            <td>Frankfurter, chicken</td>
            <td>
              <input type="number" min="1"/>
              <button>X</button>
            </td>
            <td>223</td>
            <td>15.51</td>
            <td>16.2</td>
            <td>2.74</td>
          </tr>
          <tr >
            <td>Frankfurter, chicken</td>
            <td>
              <input type="number" min="1"/>
              <button>X</button>
            </td>
            <td>223</td>
            <td>15.51</td>
            <td>16.2</td>
            <td>2.74</td>
          </tr>
        </tbody>
      </table>
    );
  };
}

export default FoodPlan;