import React, { Component } from 'react';
import { connect } from 'react-redux';
import FoodTitle from './FoodTitle/FoodTitle';
import FoodAdder from './FoodAdder/FoodAdder';
import FoodDetails from './FoodDetails/FoodDetails';
import Intro from '../../components/Intro/Intro';
import * as actions from '../../store/actions/index';

import classes from './FoodDescription.scss';

class FoodDescription extends Component {
  state = {
    foodWeight: 100
  };

  onFoodWeightChangeHandler = (event) => {
    this.setState({
      foodWeight: event.target.value
    });
  };

  render() {
    return (
      <section className={classes.FoodDescription}>
        { this.props.foodDetails ?
          <>
            <FoodTitle title={this.props.foodDetails.name}/>
            <FoodAdder
              weight={this.state.foodWeight}
              onChangeWeight={this.onFoodWeightChangeHandler}
            />
            <FoodDetails details={this.props.foodDetails}/>
          </>
          : <Intro/> }
      </section>
    );
  };
}

const mapStateToProps = state => {
  return {
    foodDetails: state.search.foodDetails
  }
};

export default connect(mapStateToProps)(FoodDescription);