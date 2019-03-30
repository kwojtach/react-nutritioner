import * as actionTypes from './actionTypes';

export const addFoodToPlan = (event, food, weight) => {
  event.preventDefault();
  return {
    type: actionTypes.ADD_FOOD_TO_PLAN,
    food: food,
    weight: weight
  }
};

export const calculateFood = (foodId, event) => {
  return {
    type: actionTypes.CALCULATE_FOOD,
    newWeight: event.target.value,
    foodId: foodId
  }
};