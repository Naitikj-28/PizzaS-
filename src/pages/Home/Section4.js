import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import PromotionImage from "../../assets/promotion/pro.png";

function Section4() {
  return (
    <>
      <section className="promotion_section">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="text-center mb-5 mb-lg-0">
              <img src={PromotionImage} className="img-fluid" alt="Promotion" />
            </Col>
            <Col lg={6} className="px-5">
              <h2>Nothing brings people together like a delicious pizza</h2>
              <p>
                From thin crust to deep dish, our pizzas are crafted to please every taste bud.
                Experience fresh ingredients, handcrafted sauces, and cheesy perfection in every slice.
              </p>
              <ul>
                <li>
                  <p>
                    Crispy crust, melty mozzarella, and flavorful toppings come together in every bite.
                  </p>
                </li>
                <li>
                  <p>Made fresh daily with hand-picked ingredients and authentic recipes.</p>
                </li>
                <li>
                  <p>
                    Whether it's a family dinner or a solo treat, pizza is always the right choice for any occasion.
                  </p>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>

      {/* BG Parallax Scroll */}
      <section className="bg_parallax_scroll"></section>
    </>
  );
}

export default Section4;
