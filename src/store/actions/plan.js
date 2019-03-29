import * as actionTypes from './actionTypes';

export const addFoodToPlan = (event, food, weight) => {
  event.preventDefault();
  return {
    type: actionTypes.ADD_FOOD_TO_PLAN,
    food: food,
    weight: weight
  }
};