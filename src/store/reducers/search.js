import * as actionTypes from '../actions/actionTypes';

const initialState = {
  searchedFoodList: '',
  searchingMode: false,
  foodDetails: ''
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case (actionTypes.SEARCH_FOOD_SUCCESS):
      return {
        ...state,
        searchedFoodList: action.searchedFoodList,
        searchingMode: action.searchingMode
      };
    case (actionTypes.FETCH_FOOD_DETAILS_SUCCESS):
      return {
        ...state,
        foodDetails: action.foodDetails
      };
    default:
      return state
  }
};

export default reducer;