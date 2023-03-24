import React, { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Products from "./pages/Products";
import AboutUs from "./pages/AboutUs";
import HomePage from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import ProductDetail from "./pages/ProductDetail";
import Login from "./pages/Login";
import RootLayout from "./pages/Root";
import AuthContext from "./components/store/auth-context";

function App() {
  const authCtx = useContext(AuthContext);
  return (
      <RootLayout>
        <Switch>
          <Route path="/store" exact>
            {authCtx.isLoggedIn && <Products />}
            {!authCtx.isLoggedIn && <Redirect to="/login" />}
          </Route>

          <Route path="/about">
            <AboutUs />
          </Route>
          <Route path="/" exact>
            <HomePage></HomePage>
          </Route>

          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/contact">
            <ContactUs></ContactUs>
          </Route>
          <Route path="/:productTitle" exact>
            <ProductDetail />
          </Route>
          <Route path='*'>
          <Redirect to="/"/>
          </Route>
        </Switch>
      </RootLayout>
  );
}

export default App;
