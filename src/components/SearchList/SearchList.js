import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';

class SearchList extends Component {
  render() {
    return (
      <ul>
        {this.props.searchingMode ? this.props.searchedFoodList.map(food => {
          return (
            <li key={food.offset} onClick={() => this.props.onFoodClicked(food.ndbno)}>
              {food.name}
            </li>)
        }) : null}
      </ul>
    );
  }
}

const mapStateToProps = state => {
  return {
    searchingMode: state.search.searchingMode,
    searchedFoodList: state.search.searchedFoodList
  }
};


const mapDispatchToProps = dispatch => {
  return {
    onFoodClicked: (food_id) => dispatch(actions.loadFoodDetails(food_id))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchList);