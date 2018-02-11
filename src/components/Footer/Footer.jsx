import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const Footer = () => (
    <div className="footer mt-1">
      <Container fluid>
        <Row>
          <Col className="text-center">
            <p className="social">Footer text</p>
          </Col>
        </Row>
      </Container>
    </div>
  );

export default Footer;
