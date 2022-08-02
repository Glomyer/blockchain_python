import React from 'react';
import { Card } from 'react-bootstrap';
import PlayForm from './PlayForm';

export default function PlayCard() {
  return (
    <Card>
      <Card.Header className="pt-3">
        <h3 className="font-weight-bold">
          <strong>Game Simulator</strong>
        </h3>
      </Card.Header>
      <Card.Body>
        <PlayForm />
      </Card.Body>
    </Card>
  );
}