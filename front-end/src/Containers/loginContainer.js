import AuthForm from "../Components/login/AuthForm.js";
import { connect } from "react-redux";
import { login } from "../Actions/userActions";

const mapStateToProps = state => {
  return {
    isLoggedIn: state.loginReducer.isLoggedIn
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login: loginData => dispatch(login(loginData))
  };
};
// maps to the specific component

export default connect(mapStateToProps, mapDispatchToProps)(AuthForm);
