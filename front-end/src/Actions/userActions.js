import { LOGGEDIN } from "./actionTypes";
import axios from "axios";
import Auth from '../utils/Auth'

export const login = loginInfo => dispatch => {
  axios.post("/session/login", loginInfo).then(res => {
    Auth.authenticateUser(loginInfo.username)
    dispatch({
      type: LOGGEDIN,
      payload: res.data
    });
  })
  .then(()=>{
    axios
    .get("/session/isLoggedIn")
    .then(res =>{
      console.log(res)
    })
  })
  .then(()=>{
    console.log("som");
  })

};

// export const logout = () => ({
//   type: ActionTypes.LOGOUT_REQUESTED,
// });

//
// .then(()=>{
//   axios
//   .get("session/isLoggedIn")
//   .then(res =>{
//     console.log(res)
//   })
// })
