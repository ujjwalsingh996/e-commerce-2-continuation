import React from "react";
import { Switch, Route } from "react-router-dom";
import Products from "./pages/Products";
import CartProvider from "./components/store/CartProvider";
import AboutUs from "./pages/AboutUs";
import HomePage from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import ProductDetail from "./pages/ProductDetail";
import Login from "./pages/Login";
import RootLayout from "./pages/Root";
function App() {
  return (
    <CartProvider>
      <RootLayout>
        <Switch>
          <Route path="/" exact>
            <Products />
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
