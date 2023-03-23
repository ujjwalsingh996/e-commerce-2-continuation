import React, { useRef, useState, useContext } from "react";
import { useHistory } from 'react-router-dom'
import AuthContext from "../components/store/auth-context";

const Login = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const history = useHistory()
  const authCtx = useContext(AuthContext);

  const stateChangehandler = async() => {
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    setIsLoggedIn(true);
    try {
      const response = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDCbHcNqtDAJHrL7U_2YgYvyOjHTc60FoA",
        {
          method: "POST",
          body: JSON.stringify({
            email: enteredEmail,
            password: enteredPassword,
            returnSecureToken: true,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      let data;
      if (response.ok) {
        data = await response.json();
      } else {
        data = await response.json();
        let errorMessage = "Login Failed";
        throw new Error(errorMessage);
      }
      console.log(data)
    } catch (err) {
      console.log(err);
    }
}

  const submitHandler = async (event) => {
    event.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    console.log(enteredEmail, enteredPassword);
     try {
      const response = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDCbHcNqtDAJHrL7U_2YgYvyOjHTc60FoA",
        {
          method: "POST",
          body: JSON.stringify({
            email: enteredEmail,
            password: enteredPassword,
            returnSecureToken: true,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      let data;
      if (response.ok) {
        data = await response.json();
      } else {
        data = await response.json();
        let errorMessage = "Login Failed";
        throw new Error(errorMessage);
      }
      authCtx.login(data.idToken)
      history.replace('/')
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <React.Fragment>
      <form onSubmit={submitHandler}>
        <label>Email:</label>
        <br />
        <input type="email" ref={emailInputRef}></input>
        <br />
        <label>Password:</label>
        <br />
        <input type="password" ref={passwordInputRef}></input>
        <br />
        {!isLoggedIn && <button onClick={stateChangehandler}>Sign Up</button>}
        {isLoggedIn && <button type="submit">Login</button>}
      </form>
    </React.Fragment>
  );
};
export default Login;
