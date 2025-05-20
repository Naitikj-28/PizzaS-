import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../../styles/AboutStyle.css";

const About = () => {
    return (
        <section className="about-s">
            <Container>
                <Row className="align-items-center">
                    <Col md={6} className="mb-4 mb-md-0">
                        <img
                            src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092"
                            alt="About Pizza Store"
                            className="img-fluid rounded"
                        />
                    </Col>
                    <Col md={6}>
                        <h2>About Our Pizza Store</h2>
                        <p>
                            Welcome to our pizza paradise! We're passionate about crafting the
                            finest pizzas using only the freshest ingredients. From
                            hand-stretched dough to our signature sauces and mouth-watering
                            toppings, every pizza is a labor of love.
                        </p>
                        <p>
                            Whether you're craving a classic Margherita, a loaded Meat Lover&apos;s,
                            or a custom creation, we've got you covered. Our goal is to serve
                            you not just a meal, but an experience — hot, fresh, and fast.
                        </p>
                        <p>
                            Join us in celebrating good food, great taste, and unforgettable
                            moments — one slice at a time.
                        </p>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default About;
