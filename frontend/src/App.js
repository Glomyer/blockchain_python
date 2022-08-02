import React from 'react';

import { Col, Container, Row } from 'react-bootstrap';

import PlayCard from './components/PlayCard';

export default function App() {
  return (
    <Container>
      <h1 className="text-center py-5">
        <strong>Team Fortress 2 - Item Drop Simulator</strong>
      </h1>
      <Row className="pb-3 justify-content-center">
        <Col sm={8}>
          <PlayCard />
        </Col>
      </Row>
      <Row>
        <h1 className="py-5">All Items</h1>
      </Row>
    </Container>
  );
}
