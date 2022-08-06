import React from 'react';
import { Card, Col } from 'react-bootstrap';

export default function ItemCard({ item }) {
  return (
    <Col sm={4} md={3}>
      <Card className="mb-3 h-80">
        <Card.Img variant="top" src={item.imageUrl} />
        <Card.Body>
          <Card.Title className="py-2">{item.name}</Card.Title>
          <Card.Subtitle className="pb-2">{item.type.charAt(0).toUpperCase() + item.type.substring(1)}</Card.Subtitle>
          <Card.Text>
            Owned by: {item.owner}
            <br />
            <strong>
              {item.previousHash}
              <br />
              {item.timestamps}
            </strong>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}