import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom'; 
import './ServiceCard.css';

const ServiceCard = ({ title, description, link, aos, delay }) => {
  return (
    <Card
      className="m-2 service-card custom-height"
      style={{ cursor: 'pointer' }}
      data-aos={aos}
      data-aos-delay={delay}
    >
      <Link to={link} className="card-link" style={{textDecoration: "none"}}> 
        <Card.Body className="text-center card-body">
          <Card.Title className="text-warning">{title}</Card.Title>
          <Card.Text className="text-dark">
            {description}
          </Card.Text>
        </Card.Body>
      </Link>
    </Card>
  );
};

export default ServiceCard;
