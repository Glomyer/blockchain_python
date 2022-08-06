import React, { useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import ItemList from './components/ItemList';
import AddItemModal from './components/AddItemModal';
import items from './items.json';

export default function App() {
  const [show, setShow] = useState(false);

  return (
    <Container>
      <Row className="justify-content-between align-items-center">
        <Col>
          <h1 className="py-5">
            <strong>
              Team Fortress 2 - Global Items
            </strong>
          </h1>
        </Col>
        <Col sm={2}>
          <Button 
            size="lg" 
            variant="outline-success"
            onClick={() => setShow(true)}
          >
            Insert Item
          </Button>
        </Col>
      </Row>
      <ItemList items={items} />
      <AddItemModal show={show} closeModal={() => setShow(false)} addItem={() => {}} />
    </Container>
  );
}