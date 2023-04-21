import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import { Offcanvas, Toast } from "react-bootstrap";
import CartContext from "../store/cart-context";
import AuthContext from "../store/auth-context";
import axios from "axios";

const Cart = (props) => { 
  
  const cartCtx = useContext(CartContext);
  const authCtx = useContext(AuthContext);
  const emailid = authCtx.emailid
  // const [emailid, setEmailid] = useState(authCtx.emailid);
  // const [updatePage, setUpdatePage] = useState(props.items);
  // console.log(props.items)
  const removeItemHandler = async(prod, title) => {
    cartCtx.removeItem(title);
    const res = await axios.delete(
      `https://crudcrud.com/api/e93aad01582244cfa7224a67fc295339/cart${emailid}/${prod}`
    );
    console.log(res)
    props.getData();
  };  




  return (
    <>
      <Offcanvas show={props.show} onHide={props.handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>CART</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {props.isLoading && <p>Loading...</p>}{" "}
          {!props.isLoading &&
            props.data.map((prod) => (
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
                    onClick={() => removeItemHandler(prod._id, prod.title, prod)}
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
