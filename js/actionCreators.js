import axios from "axios";
import { ADD_API_DATA, SET_SEARCH_TERM } from "./actions";

export function addApiData(apiData) {
  return {
    type: ADD_API_DATA,
    payload: apiData
  };
}

export function setSearchTerm(searchTerm) {
  return {
    type: SET_SEARCH_TERM,
    payload: searchTerm
  };
}

export function getApiDetails(imdbID) {
  return function getApiDetailsThunk(dispatch) {
    return axios.get(`http://localhost:3000/${imdbID}`).then(response => {
      dispatch(addApiData(response.data));
    });
  };
}
