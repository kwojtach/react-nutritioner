import * as actionTypes from '../actions/actionTypes';

const initialState = {
  foodPlan: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case (actionTypes.ADD_FOOD_TO_PLAN):
      return {
        ...state,

      };
    default:
      return state
  }
};

export default reducer;