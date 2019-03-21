import React, { Component } from 'react';
import { connect } from 'react-redux';
import FoodTitle from './FoodTitle/FoodTitle';
import FoodAdder from './FoodAdder/FoodAdder';
import * as actions from '../../store/actions/index';

import classes from './FoodDetails.scss';

class FoodDetails extends Component {
  render() {
    return (
      <section className={classes.FoodDetails}>
        <FoodTitle title={this.props.foodDetails.name}/>
        <FoodAdder/>
      </section>
    );
  };
}

const mapStateToProps = state => {
  return {
    foodDetails: state.search.foodDetails
  }
};

export default connect(mapStateToProps)(FoodDetails);