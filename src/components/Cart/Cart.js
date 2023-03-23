import React, { useCallback, useContext, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import { Offcanvas, Toast } from "react-bootstrap";
import CartContext from "../store/cart-context";
import AuthContext from "../store/auth-context";
import axios from "axios";

const Cart = (props) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // added loading state
  const cartCtx = useContext(CartContext);
  const authCtx = useContext(AuthContext);
  const emailid = authCtx.emailid
  // const [emailid, setEmailid] = useState(authCtx.emailid);
  // const [updatePage, setUpdatePage] = useState(props.items);
  // console.log(props.items)

  const removeItemHandler = async(prod, title) => {
    cartCtx.removeItem(title);
    const res = await axios.delete(
      `https://crudcrud.com/api/475b7d50b2264b1c93408a61df2770a7/cart${emailid}/${prod}`
    );
    console.log(res)
    getData();
    // setUpdatePage(cartCtx.items);
  };  

  const getData = useCallback(() => {
    setIsLoading(true);
    axios
      .get(
        `https://crudcrud.com/api/475b7d50b2264b1c93408a61df2770a7/cart${emailid}`
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
  }, [cartCtx.items, getData]);


  return (
    <>
      <Offcanvas show={props.show} onHide={props.handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>CART</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {isLoading && <p>Loading...</p>}{" "}
          {!isLoading &&
            data.map((prod) => (
              <Toast key={prod._id}>
                <Toast.Body>
                  <img
                    src={prod.imageUrl}
                    className="rounded me-2"
                    alt="items-in-the-cart"
                  />
                  <strong>
                    {prod.title} - Rs {prod.price}
                  </strong>{" "}
                  <Button
                    onClick={() => removeItemHandler(prod._id, prod.title)}
                    className="content-right"
                  >
                    Remove
                  </Button>
                </Toast.Body>
              </Toast>
            ))}
        </Offcanvas.Body>
      </Offcanvas>
      {props.children}
    </>
  );
};

export default Cart;
