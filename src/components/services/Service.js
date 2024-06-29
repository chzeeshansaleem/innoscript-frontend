import React from 'react';
import { Row, Col } from 'react-bootstrap';
import ServiceCard from './serviceCard/ServiceCard';
import { SERVICES } from '../../constants/Constants';
import './Service.css'



const Services = () => {
  return (
    <div className=" back">
      <h2 className="text-center text-warning mb-4 service-heading">Our Services</h2>
      <Row>
        {SERVICES.map(service => (
          <Col xs={12} md={6} lg={4} key={service.title}>
            <ServiceCard {...service} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Services;
