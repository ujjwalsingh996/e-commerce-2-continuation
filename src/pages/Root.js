import React, { useContext, useState } from "react";
import { Navbar, Container, Button } from "react-bootstrap";
import CartContext from "../components/store/cart-context";
import Cart from "../components/Cart/Cart";

const RootLayout = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const cartCtx = useContext(CartContext);
  const handleShow = () => setShow(true);
  return (
    <React.Fragment>
      <Navbar bg="dark" expand="lg" variant="dark">
        <Container>
          <Navbar.Brand href="/home">Home</Navbar.Brand>
          <Navbar.Brand href="/">Store</Navbar.Brand>
          <Navbar.Brand href="/about">About</Navbar.Brand>
          <Navbar.Brand href="/login">Login</Navbar.Brand>
          <Navbar.Brand href="/contact">Contact us</Navbar.Brand>
          <Button variant="primary" onClick={handleShow}>
            Cart ({cartCtx.items.length})
          </Button>
        </Container>
      </Navbar>
      <Cart items={cartCtx.items} show={show} handleClose={handleClose}></Cart>
      {props.children}
    </React.Fragment>
  );
};

export default RootLayout;
