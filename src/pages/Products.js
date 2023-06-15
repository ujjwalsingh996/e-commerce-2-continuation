import React, { useContext } from "react";
import { Card, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

import "./Products.css";
import CartContext from "../components/store/cart-context";
import AuthContext from "../components/store/auth-context";

const productsArr = [
  {
    title: "Colors",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },

  {
    title: "Black and white Colors",

    price: 50,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },

  {
    title: "Yellow and Black Colors",

    price: 70,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },

  {
    title: "Blue Color",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];

const Products = (props) => {
  const cartCtx = useContext(CartContext);
  const authCtx = useContext(AuthContext);
  // const [data, setData] = useState([]);
  const email = authCtx.email;
  let emailid = "";
  for (var i = 0; i < email.length; i++) {
    if (email[i] === "@") {
      continue;
    }
    if (email[i] === ".") {
      continue;
    }
    emailid = emailid + email[i];
  }

  const addToCartHandler = (prod) => {
    console.log("Adding item", prod);
    cartCtx.addItem(prod);
    // let obj =
    // {
    //   title: prod.title,
    //   price: prod.price,
    //   imageUrl: prod.imageUrl
    // }
    authCtx.addEmail(emailid);
    // console.log(emailid)
    axios
      .post(
        `https://crudcrud.com/api/31ca41ab6e544aa3a25855198412ff11/cart${emailid}`,
        prod
      )
      .then((res) => {
        console.log(res);
      });
    // setData(prod);
  };

  return (
    <React.Fragment>
      {productsArr.map((prod) => (
        <Container key={prod.title} className="products">
          <Card className="mt-3" style={{ width: "18rem" }}>
            <Card.Img variant="top" src={prod.imageUrl} />
            <Card.Body>
              <Link to={prod.title}>
                <Card.Title>Album</Card.Title>
              </Link>
              <Card.Subtitle className="mb-2 text-muted">
                Rs {prod.price}
              </Card.Subtitle>
              <Card.Text>{prod.title}</Card.Text>
              <Button
                onClick={() => {
                  addToCartHandler(prod);
                }}
                variant="primary"
              >
                Add to Cart
              </Button>
            </Card.Body>
          </Card>
        </Container>
      ))}
    </React.Fragment>
  );
};

export default Products;
