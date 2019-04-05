import * as actionTypes from '../actions/actionTypes';

const initialState = {
  foodPlan: [],
  summary: {
    weight: 0,
    proximates: [0,0,0,0]
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case (actionTypes.ADD_FOOD_TO_PLAN):
      if (state.foodPlan.find(food => food.id === action.food.id)) {
        return state
      }

      const food = {
        id: action.food.id,
        name: action.food.name,
        proximates: action.food.proximates.map(proximate => proximate.value),
        proximatesValues: [...action.food.proximatesValues],
        weight: action.weight,
        key: action.food.id
      };

      return {
        ...state,
        foodPlan: [food, ...state.foodPlan]
      };
    case (actionTypes.CALCULATE_FOOD):
      const foodCalculated = state.foodPlan.find(food => food.id === action.foodId);
      if (!action.newWeight > 0) return state;

      foodCalculated.weight = action.newWeight;
      foodCalculated.proximates = foodCalculated.proximates.map((proximate, index) => {
        return (Math.ceil(parseFloat(foodCalculated.proximatesValues[index]) * parseFloat(action.newWeight))) / 100
      });

      const plan = state.foodPlan.map(food => {
        return food.id === action.foodId ? foodCalculated : food
      });

      return {
        ...state,
        foodPlan: plan
      };
    case (actionTypes.CALCULATE_FOOD_PLAN):
      const planWeight = state.foodPlan.reduce(((total, food) => total + parseFloat(food.weight)), 0);
      const proximatesWeight = [0,0,0,0];
      proximatesWeight.forEach((weight, index) => {
        state.foodPlan.map(food => proximatesWeight[index] += parseFloat(food.proximates[index]))
      });

      return {
        ...state,
        summary: {
          weight: planWeight,
          proximates: proximatesWeight
        }
      };
    case (actionTypes.DELETE_FOOD):
      const newFoodPlan = state.foodPlan.filter(food => food.id !== action.foodId);
      return {
        ...state,
        foodPlan: newFoodPlan
      };
    case (actionTypes.DELETE_PLAN):
      return {
        ...state,
        foodPlan: []
      };
    default:
      return state
  }
};

export default reducer;
