import React from 'react';

import { Button, Col, Form, Row } from 'react-bootstrap';

export default function PlayForm() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Submitting...');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Row className="justify-content-center">
        <Col sm={6}>
          <Form.Group>
            <Form.Label>Insert here the number of played hours</Form.Label>
            <Form.Control type="number" required />
          </Form.Group>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col sm={2}>
          <Button
            className="mt-3"
            variant="primary" 
            type="submit" 
            size="lg"
          >
            <strong>Simulate</strong>
          </Button>
        </Col>
      </Row>
    </Form>
  );
}