import React from "react"

const AuthContext = React.createContext({
    token: '',
    isLoggedIn: false,
    email: '',
    emailid: '',
    addEmail: (email) => {},
    login: (token) => {},
    logout: () => {}
})

export default AuthContext;