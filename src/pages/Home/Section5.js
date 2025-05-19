import React from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import StoreIOS from "../../assets/shop/appstore.png";
import StoreGoogle from "../../assets/shop/googleplay.png";
import DownloadImage from "../../assets/shop/e-shop.png";
import Brand1 from "../../assets/brands/Brand-111.png";
import Brand2 from "../../assets/brands/brand-12.png";
import Brand3 from "../../assets/brands/brand-13.png";
import Brand4 from "../../assets/brands/brand-14.png";
import Brand5 from "../../assets/brands/Brand-155.png";
import Brand6 from "../../assets/brands/brand-16.png";
import Brand7 from "../../assets/brands/Brand-177.png";
import Brand8 from "../../assets/brands/Brand-188.png";

function Section5() {
  return (
    <>
      <section className="shop_section">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="text-center text-lg-start mb-5 mb-lg-0">
              <h4>Get Our Pizza App</h4>
              <h2>Order & Save up to 20%</h2>
              <p>
                Craving something cheesy and delicious? Download our pizza delivery app
                and get hot, fresh pizzas delivered to your door — fast and affordable!
              </p>
              <Link to="/">
                <img
                  src={StoreIOS}
                  alt="Download on App Store"
                  className="img-fluid store me-3"
                />
              </Link>
              <Link to="/">
                <img
                  src={StoreGoogle}
                  alt="Get it on Google Play"
                  className="img-fluid store me-3"
                />
              </Link>
            </Col>
            <Col lg={6}>
              <img src={DownloadImage} alt="Pizza App Promo" className="img-fluid" />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="brand_section">
        <Container>
          <Row>
            <Carousel controls={false} indicators={false} interval={3000}>
              <Carousel.Item>
                <div className="d-flex flex-wrap justify-content-center gap-4">
                  <img src={Brand1} className="img-fluid brand_img" alt="brand-1" />
                  <img src={Brand2} className="img-fluid brand_img" alt="brand-2" />
                  <img src={Brand3} className="img-fluid brand_img" alt="brand-3" />
                  <img src={Brand4} className="img-fluid brand_img" alt="brand-4" />
                  <img src={Brand5} className="img-fluid brand_img" alt="brand-5" />
                  <img src={Brand6} className="img-fluid brand_img" alt="brand-6" />
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="d-flex flex-wrap justify-content-center gap-4">
                  <img src={Brand3} className="img-fluid brand_img" alt="brand-3" />
                  <img src={Brand4} className="img-fluid brand_img" alt="brand-4" />
                  <img src={Brand5} className="img-fluid brand_img" alt="brand-5" />
                  <img src={Brand6} className="img-fluid brand_img" alt="brand-6" />
                  <img src={Brand7} className="img-fluid brand_img" alt="brand-7" />
                  <img src={Brand8} className="img-fluid brand_img" alt="brand-8" />
                </div>
              </Carousel.Item>
            </Carousel>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Section5;
