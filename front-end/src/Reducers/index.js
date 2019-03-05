import { combineReducers } from "redux";

import loginReducer from "./loginReducer";

const rootReducer = combineReducers({
  loginReducer: loginReducer,
  // navbar: navbar,
  // home: home,
  // explore: explore,
  // tagged: tagged
});

export default rootReducer;
