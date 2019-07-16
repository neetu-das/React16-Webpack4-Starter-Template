/* eslint no-debugger:0 */
// import { combineReducers } from "redux";
import { ADD_API_DATA, SET_SEARCH_TERM } from "./actions";

// const DEFAULT_STATE = {
//   searchTerm: "",
//   apiData: {
//     rating: ""
//   }
// };

const DEFAULT_STATE = {
  searchTerm: "",
  apiData: {}
};

const setSearchTerm = (state, action) => {
  return Object.assign({}, state, { searchTerm: action.payload });
};

const addApiData = (state, action) => {
  const obj = state.apiData;
  obj[action.payload.imdbID] = action.payload;
  return Object.assign({}, state, {
    apiData: obj
  });
};

const rootReducer = (state = DEFAULT_STATE, action) => {
  debugger;
  switch (action.type) {
    case SET_SEARCH_TERM:
      return setSearchTerm(state, action);
    case ADD_API_DATA:
      return addApiData(state, action);
    default:
      return state;
  }
};

// const setSearchTerm = (state = "", action) => {
//   if (action.type === SET_SEARCH_TERM) {
//     return action.payload;
//   }
//   return state;
// };

// const addApiData = (state = {}, action) => {
//   if (action.type === ADD_API_DATA) {
//     return Object.assign({}, state, {
//       [action.payload.imdbID]: action.payload
//     });
//   }
//   return state;
// };

// const rootReducer = combineReducers({
//   searchTerm: setSearchTerm,
//   apiData: addApiData
// });

export default rootReducer;
