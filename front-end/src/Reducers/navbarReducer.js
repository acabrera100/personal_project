// import { LOGGEDIN } from "../Actions/actionTypes";
// import Auth from '../utils/Auth'

const initialState = {
payload:[],
isloading:false,
error:{}
};

export const navbarReducer = (state = initialState, action) => {
  switch(action.type){
    case FETCH_SEARCH_DATA:
    return{
      ...state,
      isloading:true
    }
    case FETCH_SEARCH_SUCESS:
    return{
      ...state,
      payload: action.payload,
      isLoading: false
    }
    case FETCH_SEARCH_FAILURE:
    return{
      ...state,
      error:action.error,
      isLoading: false
    }
    case RESET_SEARCH_DATA:
    return{...state,...initialState}
    default:
    return state;
  }

};
