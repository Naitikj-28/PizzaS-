import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function Section7() {
  return (
    <section className="contact_section">
      <Container>
        <Row className="justify-content-center">
          <Col sm={10} md={8} className="text-center">
            <h4 className="text-uppercase text-muted mb-2">We Guarantee</h4>
            <h2 className="display-5 fw-bold">Hot & Fresh Pizza in 30 Minutes!</h2>
            <p className="mt-3 mb-4">
              Craving a slice? We've got you covered. Enjoy mouth-watering pizza delivered straight to your door—piping hot, delicious, and on time. If it takes longer, it’s on us!
            </p>
            <Link to="/" className="btn btn_red px-4 py-2 rounded-0 fw-semibold">
              Call Now: 999-888-7777
            </Link>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Section7;
