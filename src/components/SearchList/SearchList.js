import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';

import classes from './SearchList.scss';

class SearchList extends Component {
  render() {
    return (
      <section className={classes.SearchList}>
        <ul>
          {this.props.searchingMode ? this.props.searchedFoodList.map(food => {
            return (
              <li key={food.offset} onClick={() => this.props.onFoodClicked(food.ndbno)}>
                <h3>{food.name}</h3>
              </li>)
          }) : null}
        </ul>
      </section>
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
    onFoodClicked: (food_id) => dispatch(actions.fetchFoodDetails(food_id))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchList);