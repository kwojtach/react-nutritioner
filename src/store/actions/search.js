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
          console.log(response.data.errors.error[0].message);
        } else {
          console.log(response.data.list.item);
          dispatch(searchFoodSuccess(response.data.list.item));
        }
      }).catch(error => console.error(error));
  };
};

export const loadFoodDetailsSuccess = (food) => {
  return {
    type: actionTypes.LOAD_FOOD_DETAILS_SUCCESS,
    foodDetails: food
  }
};

export const loadFoodDetails = (food_id) => {
  return dispatch => {
    axios.get(`reports/?ndbno=${food_id}&format=json&api_key=${key}`)
      .then(response => {
        console.log(response.data.report.food);
        dispatch(loadFoodDetailsSuccess(response.data.report.food));
      })
      .catch(error => console.error(error));
  }
};