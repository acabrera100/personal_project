import { combineReducers } from "redux";

import loginReducer from "./loginReducer";
// import searchbarReducer from './searchbarReducer'

const rootReducer = combineReducers({
  loginReducer: loginReducer,
  // searchbar: searchbar,
  // home: home,
  // explore: explore,
  // tagged: tagged
});

export default rootReducer;
