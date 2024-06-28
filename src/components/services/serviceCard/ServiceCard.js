import React from 'react';
import { Card } from 'react-bootstrap';
import './ServiceCard.css';

const ServiceCard = ({ title, description, link, aos, delay }) => {
  return (
    <Card className="m-2 service-card custom-height" style={{ cursor: 'pointer' }} onClick={() => window.location.href = link}
    data-aos={aos}
    data-aos-delay={delay}
    >
      <Card.Body className="text-center card-body">
        <Card.Title className="text-warning">{title}</Card.Title>
        <Card.Text className="text-dark">
          {description}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ServiceCard;
