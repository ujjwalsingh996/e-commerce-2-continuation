import React, {useState} from "react";
import AuthContext from "./auth-context";

const AuthContextProvider = (props) => {
  const [token, setToken] = useState(null);
  const [email, setEmail] = useState('');
  const [emailId, setEmailId] = useState('')
  const userIsLoggedin = !!token;

  const loginHandler = (token, email) => {
    setToken(token);
    setEmail(email)
    // console.log(email)
    localStorage.setItem('token', token)
    console.log(token)
  };
  const logouthandler = () => {
    setToken(null);
    localStorage.removeItem('token')
  };

  const addEmailHandler = (emailid) => {
    // console.log(emailid)
    setEmailId(emailid)
  }
  const contextValue = {
    token: token,
    isLoggedIn: userIsLoggedin,
    email: email,
    emailid: emailId,
    addEmail: addEmailHandler,
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
