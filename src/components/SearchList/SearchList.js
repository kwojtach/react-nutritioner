import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import Pagination from './Pagination/Pagination';

import classes from './SearchList.scss';
import activeClass from './Pagination/Pagination.scss';


class SearchList extends Component {
  state = {
    currentPage: 1,
    perPage: 12
  };

  onHandlePageChange = (event) => {
    document.getElementById(this.state.currentPage).classList.remove(activeClass.Active);
    event.currentTarget.classList.add(activeClass.Active);
    this.setState({
      currentPage: event.currentTarget.id
    });
  };

  render() {
    const limitFoodName = (name, limit = 30) => {
      const newName = [];
      if (name.length > limit) {
        name.split(' ').reduce((accumulator, current) => {
          if (accumulator + current.length <= limit) {
            newName.push(current);
          }
          return accumulator + current.length;
        }, 0);
        return `${newName.join(' ')}...`;
      }
      return name;
    };

    const lastFoodIndex = this.state.currentPage * this.state.perPage;
    const firstFoodIndex = lastFoodIndex - this.state.perPage;
    const currentFoods = this.props.searchedFoodList.slice(firstFoodIndex, lastFoodIndex);
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(this.props.searchedFoodList.length / this.state.perPage); i++) {
      pageNumbers.push(i);
    }

    return (
      <section className={classes.SearchList}>
        {this.props.searchingMode ?
          <>
            <ul className={classes.FoodList}>
              {currentFoods.map(food => {
                return (
                  <li key={food.offset} onClick={() => this.props.onFoodClicked(food.ndbno)}>
                    <a href="javascript:void(0);">
                      <h3>{limitFoodName(food.name)}</h3>
                    </a>
                  </li>)
              })}
            </ul>
            {pageNumbers.length > 1 ? <Pagination
              currentPage={this.state.currentPage}
              pageNumbers={pageNumbers}
              onPageChange={this.onHandlePageChange}
            /> : null}
          </> : null}
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