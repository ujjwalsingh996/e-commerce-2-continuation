import React, { useRef } from "react";

const ContactUs = () => {
    const emailInputRef = useRef();
    const passwordInputRef = useRef();
    const numberInputRef = useRef();
  const submitHandler = async (event) => {
    event.preventDefault();
    let obj = {
        email: emailInputRef.current.value,
        pass: passwordInputRef.current.value,
        number: numberInputRef.current.value
    }
    const response = await fetch('https://e-commerce-68ff8-default-rtdb.firebaseio.com/details.json', {
        method: 'POST',
        body: JSON.stringify(obj),
        headers: {
            'Content-Type': 'application/json',
        }
    })
    const data = await response.json();
    console.log(data)


  };
  return (
    <form onSubmit={submitHandler}>
      <label>Email</label><br/>
      <input type="email" ref={emailInputRef}></input><br/>
      <label>Password</label><br/>
      <input type="password" ref={passwordInputRef}></input><br/>
      <label>Phone Number</label><br/>
      <input type="password" ref={numberInputRef}></input><br/>
      <button type="submit">
        Submit
      </button>
    </form>
  );
};

export default ContactUs;
