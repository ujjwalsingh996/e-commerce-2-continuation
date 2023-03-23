import React from "react";
import { ListGroup, Container, Button } from "react-bootstrap";

const HomePage = () => {
  return (
    <React.Fragment>
      <Container className="text-center">
        <header>
          <h1>The Generics</h1>
        </header>
        <body>
            <h3>TOURS</h3>
          <ListGroup className="mt-3">
            <ListGroup.Item className="mt-3">
            <strong>JUL 16</strong> DETROIT, MI DTE ENERGY MUSIC THEATRE{' '}
              <Button>Buy Tickets</Button>
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>JUL 19</strong> TORONTO,ON BUDWEISER STAGE{' '}
              <Button>Buy Tickets</Button>
            </ListGroup.Item>
            <ListGroup.Item>
            <strong>JUL 22</strong> BRISTOW, VA JIGGY LUBE LIVE{' '}
              <Button>Buy Tickets</Button>
            </ListGroup.Item>
            <ListGroup.Item>
            <strong>JUL     29</strong> PHOENIX, AZ AK-CHIN PAVILION{' '}
              <Button>Buy Tickets</Button>
            </ListGroup.Item>
            <ListGroup.Item>
            <strong>AUG 2</strong> LAS VEGAS, NV T-MOBILE ARENA{' '}
              <Button>Buy Tickets</Button>
            </ListGroup.Item>
            <ListGroup.Item>
            <strong>AUG 7</strong> CONCORD, CA CONCORD PAVILION{' '}
              <Button>Buy Tickets</Button>
            </ListGroup.Item>
          </ListGroup>
        </body>
        <footer>
          <h1 className="mt-3">The Generics</h1>
        </footer>
      </Container>
    </React.Fragment>
  );
};

export default HomePage;
