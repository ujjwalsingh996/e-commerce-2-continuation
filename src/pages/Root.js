import React, { useContext, useState, useCallback, useEffect } from "react";
import { Navbar, Container, Button } from "react-bootstrap";
import CartContext from "../components/store/cart-context";
import Cart from "../components/Cart/Cart";
import AuthContext from "../components/store/auth-context";
import axios from "axios";

const RootLayout = (props) => {
  const [show, setShow] = useState(false);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const handleClose = () => setShow(false);
  const cartCtx = useContext(CartContext);
  const handleShow = () => setShow(true);
  const authCtx = useContext(AuthContext);
  const emailid = authCtx.emailid;

  const getData = useCallback(() => {
    setIsLoading(true);
    axios
      .get(
        `https://crudcrud.com/api/89ff5a1936e643c088a7b1157c2a10c2/cart${emailid}`
      )
      .then((res) => {
        setData(res.data);
        setIsLoading(false);
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
        // setIsLoading(false);
      });
  }, [emailid]);

  useEffect(() => {
    getData();
  }, [cartCtx.items, getData, show]);

  return (
    <React.Fragment>
      <Navbar bg="dark" expand="lg" variant="dark">
        <Container>
          <Navbar.Brand href="/">Home</Navbar.Brand>
          <Navbar.Brand href="/store">Store</Navbar.Brand>
          <Navbar.Brand href="/about">About</Navbar.Brand>
          <Navbar.Brand href="/login">Login</Navbar.Brand>
          <Navbar.Brand href="/contact">Contact us</Navbar.Brand>
          <Button variant="primary" onClick={handleShow}>
            Cart ({cartCtx.items.length})
          </Button>
        </Container>
      </Navbar>
      <Cart
        getData={getData}
        isLoading={isLoading}
        data={data}
        items={cartCtx.items}
        show={show}
        handleClose={handleClose}
      ></Cart>
      {props.children}
    </React.Fragment>
  );
};

export default RootLayout;
