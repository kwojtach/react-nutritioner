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
        proximates: action.food.proximates.map(proximate => proximate.value),
        proximatesValues: [...action.food.proximatesValues],
        weight: action.weight,
        key: action.food.id
      };

      return {
        foodPlan: [food, ...state.foodPlan]
      };
    case (actionTypes.CALCULATE_FOOD):
      const foodCalculated = state.foodPlan.find(food => food.id === action.foodId);
      if (action.newWeight > 0) {
        foodCalculated.weight = action.newWeight;
      } else return {...state };

      foodCalculated.proximates = foodCalculated.proximates.map((proximate, index) => {
        return (Math.ceil(parseFloat(foodCalculated.proximatesValues[index]) * parseFloat(action.newWeight))) / 100
      });

      const plan = state.foodPlan.map(food => {
        return food.id === action.foodId ? foodCalculated : food
      });

      return {
        foodPlan: plan
      };
    default:
      return state
  }
};

export default reducer;