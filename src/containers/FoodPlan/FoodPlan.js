import React, { Component } from 'react';
import PlanTable from './PlanTable/PlanTable';
import { connect } from 'react-redux';

import classes from './FoodPlan.scss';
import * as actions from "../../store/actions";

class FoodPlan extends Component {
  render() {
    return (
      <section className={classes.FoodPlan}>
        {this.props.foodPlan ?
          <PlanTable
            foodPlan={this.props.foodPlan}
            calculateFood={this.props.calculateFood}
          />
           : null}
      </section>
    );
  };
}

const mapStateToProps = state => {
  return {
    foodPlan: state.plan.foodPlan
  }
};

const mapDispatchToProps = dispatch => {
  return {
    calculateFood: (foodKey, newWeight) => dispatch(actions.calculateFood(foodKey, newWeight))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(FoodPlan);