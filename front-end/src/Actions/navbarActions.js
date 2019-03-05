import { FETCH_SEARCH_DATA,FETCH_SEARCH_SUCESS,FETCH_SEARCH_FAILURE } from "./actionTypes";
import axios from "axios";


export const searchTags = (loginInfo) => (dispatch) => {
  return (
    axios.get("/posts/:id", loginInfo).then(res => {
// Update payload in reducer on success
      dispatch({
        type: FETCH_SEARCH_DATA,
        payload: res.data
      });
    })
  )
};
