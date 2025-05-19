import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Pizza from "../../assets/about/pizza.png";
import Salad from "../../assets/about/salad.png";
import Delivery from "../../assets/about/delivery-bike.png";

// Mock Data Cards
const mockData = [
  {
    image: Pizza,
    title: "Authentic Pizza",
    paragraph: `Savor every bite with our hand-tossed crusts, rich tomato sauces, and fresh toppings. Experience the true taste of traditional Italian pizza in every slice.`,
  },
  {
    image: Salad,
    title: "Fresh Ingredients",
    paragraph: `We use only the freshest vegetables, finest cheeses, and quality meats to craft a pizza that’s as wholesome as it is delicious.`,
  },
  {
    image: Delivery,
    title: "Lightning-Fast Delivery",
    paragraph: `Craving pizza? We'll bring it to your door hot and fresh in record time so you can enjoy your meal without the wait.`,
  },
  // Add more mock data objects as needed
];

function Section2() {
  return (
    <>
      <section className="about_section">
        <Container>
          <Row>
            <Col lg={{ span: 8, offset: 2 }} className="text-center">
              <h2>Pizza brings people together like nothing else</h2>
              <p>
                From classic Margheritas to bold, flavor-packed toppings, our pizzas are made to satisfy every craving and every crowd.
              </p>
              <Link to="/" className="btn order_now btn_red">
                Explore Full Menu
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="about_wrapper">
        <Container>
          <Row className="justify-content-md-center">
            {mockData.map((cardData, index) => (
              <Col md={6} lg={4} className="mb-4 mb-md-0" key={index}>
                <div className="about_box text-center">
                  <div className="about_icon">
                    <img
                      src={cardData.image}
                      className="img-fluid"
                      alt="icon"
                    />
                  </div>
                  <h4>{cardData.title}</h4>
                  <p>{cardData.paragraph}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Section2;
