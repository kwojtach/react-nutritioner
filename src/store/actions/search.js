import * as actionTypes from './actionTypes';
import axios from '../../axios-instance';
import { key } from '../../config';

export const searchFoodSuccess = (searchedFoodList) => {
  return {
    type: actionTypes.SEARCH_FOOD_SUCCESS,
    searchedFoodList: searchedFoodList,
    searchingMode: true,
  };
};

export const searchFood = (event, food) => {
  return dispatch => {
    event.preventDefault();
    axios.get(`search/?format=json&q=${food}&ds=Standard%20Reference&sort=r&max=50&offset=0&api_key=${key}`)
      .then(response => {
        if (response.data.errors) {
          // handle error
        } else {
          dispatch(searchFoodSuccess(response.data.list.item));
        }
      }).catch(error => console.error(error));
  };
};

export const fetchFoodDetailsSuccess = (food) => {
  return {
    type: actionTypes.FETCH_FOOD_DETAILS_SUCCESS,
    foodDetails: food
  }
};

export const fetchFoodDetails = (food_id) => {
  return dispatch => {
    axios.get(`reports/?ndbno=${food_id}&format=json&api_key=${key}`)
      .then(response => {
        const food = {
          id: response.data.report.food.ndbno,
          name: response.data.report.food.name,
          proximates: [],
          proximatesValues: [], // Add constant proximatesValues to calculate the plan later
          minerals: []
        };
        // Create an array with IDs to target specific proximates and minerals
        // e.g. for protein ID = '203';
        const proxAndMins = ['208', '203', '204', '205',    // Proximates e.g. protein
          '301', '303', '304', '305', '306', '307', '309'];   // Minerals e.g. calcium
        let nutrients = response.data.report.food.nutrients.filter(el => proxAndMins.includes(el.nutrient_id));

        food.proximates = nutrients.slice(0, 4);
        food.minerals = nutrients.slice(4);

        food.proximates.forEach(el => {
          food.proximatesValues.push(el.value);
        });
        dispatch(fetchFoodDetailsSuccess(food));
      })
      .catch(error => console.error(error));
  }
};