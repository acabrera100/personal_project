import { SEARCH_RESULT } from "./actionTypes";
import axios from "axios";


export const searchTags = (loginInfo) => (dispatch) => {
  return (
    axios.get("/posts/tag/:id", loginInfo).then(res => {
// Initial loading state
      dispatch({
        type: SEARCH_RESULT,
        payload: res.data
      });
    })
  )
};
