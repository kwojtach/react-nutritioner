import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';

import classes from './SearchBar.scss';

class SearchBar extends Component {
  state = {
    searchedFood: ''
  };

  onInputChangeHandler = (event) => {
    this.setState({
      searchedFood: event.target.value
    });
    console.log(this.state.searchedFood);
  };

  render() {
    return (
      <form className={classes.SearchBar} onSubmit={(event) => this.props.onSearchFood(event, this.state.searchedFood)}>
        <input
          value={this.state.searchedFood}
          onChange={(event) => this.onInputChangeHandler(event)}
          type="text"
          placeholder="Search for food"
        />
        <button>Search</button>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSearchFood: (event, searchedFood) => dispatch(actions.searchFood(event, searchedFood))
  }
};

export default connect(null, mapDispatchToProps)(SearchBar);