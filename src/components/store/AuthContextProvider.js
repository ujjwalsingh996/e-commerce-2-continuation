import React, {useState} from "react";
import AuthContext from "./auth-context";

const AuthContextProvider = (props) => {
  const [token, setToken] = useState(null);
  const userIsLoggedin = !!token;

  const loginHandler = (token) => {
    setToken(token);
    localStorage.setItem('token', token)
    console.log(token)
  };
  const logouthandler = () => {
    setToken(null);
    localStorage.removeItem('token')
  };
  const contextValue = {
    token: token,
    isLoggedIn: userIsLoggedin,
    login: loginHandler,
    logout: logouthandler,
  };
  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
