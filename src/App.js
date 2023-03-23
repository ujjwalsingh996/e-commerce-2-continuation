import React, { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Products from "./pages/Products";
import CartProvider from "./components/store/CartProvider";
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
    <CartProvider>
      <RootLayout>
        <Switch>
          <Route path="/" exact>
            {authCtx.isLoggedIn && <Products />}
            {!authCtx.isLoggedIn && <Redirect to="/login" />}
          </Route>

          <Route path="/about">
            <AboutUs />
          </Route>
          <Route path="/home">
            <HomePage></HomePage>
          </Route>

          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/contact">
            <ContactUs></ContactUs>
          </Route>
          <Route path="/:productTitle">
            <ProductDetail />
          </Route>
        </Switch>
      </RootLayout>
    </CartProvider>
  );
}

export default App;
