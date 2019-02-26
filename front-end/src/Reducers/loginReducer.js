import { LOGGEDIN } from "../Actions/actionTypes";
import Auth from '../utils/Auth'

const initialState = {

  isLoggedIn: null,
  username: null
};

const loginReducer = (state = initialState, action) => {
  if (action.type === LOGGEDIN) {
    return ({
      ...state,
      username: action.payload.username,
      isLoggedIn: Auth.getToken()
    })
  }else{
    return state
  }

};


export default loginReducer;
