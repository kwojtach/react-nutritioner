import * as actionTypes from '../actions/actionTypes';

const initialState = {
  foodPlan: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case (actionTypes.ADD_FOOD_TO_PLAN):
      const food = {
        id: action.food.id,
        name: action.food.name,
        proximates: [...action.food.proximates],
        proximatesValues: [...action.food.proximatesValues],
        weight: action.weight,
        key: action.food.id
      };

      console.log(food)
      return {
        foodPlan: [food, ...state.foodPlan]
      };
    default:
      return state
  }
};

export default reducer;