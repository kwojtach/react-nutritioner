import React, { Component } from 'react';
import PlanTable from './PlanTable/PlanTable';
import { connect } from 'react-redux';

import classes from './FoodPlan.scss';
import * as actions from "../../store/actions";

class FoodPlan extends Component {
  render() {
    return (
      <section className={classes.FoodPlan}>
        {this.props.foodPlan.length ?
          <PlanTable
            foodPlan={this.props.foodPlan}
            summary={this.props.planSummary}
            calculateFood={this.props.calculateFood}
            deleteFood={this.props.deleteFood}
            deletePlan={this.props.deletePlan}
          /> : null}
      </section>
    );
  };
}

const mapStateToProps = state => {
  return {
    foodPlan: state.plan.foodPlan,
    planSummary: state.plan.summary
  }
};

const mapDispatchToProps = dispatch => {
  return {
    calculateFood: (foodKey, newWeight) => dispatch(actions.calculateFood(foodKey, newWeight)),
    deleteFood: (foodId) => dispatch(actions.deleteFood(foodId)),
    deletePlan: () => dispatch(actions.deletePlan())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(FoodPlan);
