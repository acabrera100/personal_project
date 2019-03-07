import {SEARCH_RESULT} from "../Actions/actionTypes";


const initialState = {
payload:[],
isloading:false,
error:{}
};

export const navbarReducer = (state = initialState, action) => {
  switch(action.type){
    case SEARCH_RESULT:
    return{
      ...state,
      isloading:true
    }

  default: return state
  }

};
// You don't need search failure. just the result. the action can send back an error in the promise resolve
//
