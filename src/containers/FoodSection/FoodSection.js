import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';

class FoodSection extends Component {
  render() {
    return (
      <h1>{this.props.foodDetails.name}</h1>
    );
  };
}

const mapStateToProps = state => {
  return {
    foodDetails: state.search.foodDetails
  }
};

export default connect(mapStateToProps)(FoodSection);