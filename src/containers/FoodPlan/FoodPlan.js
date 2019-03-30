import React, { Component } from 'react';
import PlanTable from './PlanTable/PlanTable';
import { connect } from 'react-redux';

import classes from './FoodPlan.scss';

class FoodPlan extends Component {
  render() {
    return (
      <section className={classes.FoodPlan}>
        {this.props.foodPlan ?
          <PlanTable foodPlan={this.props.foodPlan}/>
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

export default connect(mapStateToProps)(FoodPlan);