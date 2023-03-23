import ReactDOM from "react-dom/client";
import "../node_modules/react-bootstrap/dist/react-bootstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";
import AuthContextProvider from "./components/store/AuthContextProvider";
import CartProvider from "./components/store/CartProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    
  <AuthContextProvider>
    <CartProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </CartProvider>
  </AuthContextProvider>
);
