import * as actionTypes from './actionTypes';

export const addFoodToPlan = (event, food, weight) => {
  event.preventDefault();
  return function(dispatch) {
    dispatch({
      type: actionTypes.ADD_FOOD_TO_PLAN,
      food: food,
      weight: weight
    });
    dispatch({
      type: actionTypes.CALCULATE_FOOD_PLAN
    })
  };
};

export const calculateFood = (foodId, event) => {
  return function(dispatch) {
    dispatch({
      type: actionTypes.CALCULATE_FOOD,
      newWeight: event.target.value,
      foodId: foodId
    });
    dispatch({
      type: actionTypes.CALCULATE_FOOD_PLAN
    })
  };
};

export const deleteFood = (foodId) => {
  return function(dispatch) {
    dispatch({
      type: actionTypes.DELETE_FOOD,
      foodId: foodId
    });
    dispatch({
      type: actionTypes.CALCULATE_FOOD_PLAN
    })
  };
};

export const deletePlan = () => {
  return {
    type: actionTypes.DELETE_PLAN
  }
};
