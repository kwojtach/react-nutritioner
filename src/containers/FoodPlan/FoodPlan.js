import React, { Component } from 'react';
import { connect } from 'react-redux';

import classes from './FoodPlan.scss';

class FoodPlan extends Component {
  render() {
    return (
      <section className={classes.FoodPlan}>
        {this.props.foodPlan ?
          <table>
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
            {this.props.foodPlan.map(food => {
                return (
                  <tr key={food.id}>
                    <td>{food.name}</td>
                    <td>
                      <input value={food.weight} type="number" min="1"/>
                      <button>X</button>
                    </td>
                    {food.proximatesValues.map(proximate => {
                      return (
                        <td key={proximate}>{proximate}</td>
                      )
                    })}
                  </tr>
                )
              })}
            </tbody>
          </table> : null
        }

      </section>
    );
  };
}

const mapStateToProps = state => {
  return {
    foodPlan: state.plan.foodPlan
  }
};

export default connect(mapStateToProps)(FoodPlan);