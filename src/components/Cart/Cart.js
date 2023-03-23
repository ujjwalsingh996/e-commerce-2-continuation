import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import { Offcanvas, Toast } from "react-bootstrap";
import CartContext from "../store/cart-context";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const removeItemHandler = (prod) => {
    cartCtx.removeItem(prod)
  }
  return (
    <>
      <Offcanvas show={props.show} onHide={props.handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>CART</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {cartCtx.items.map((prod) => (
            <Toast>
              <Toast.Body>
                <img
                  src={prod.imageUrl}
                  className="rounded me-2"
                  alt="items-in-the-cart"
                />
                <strong>
                  {prod.title} - Rs {prod.price}
                </strong>{" "}
                <Button onClick={() => removeItemHandler(prod.title)} className="content-right">Remove</Button>
              </Toast.Body>
            </Toast>
          ))}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Cart;
