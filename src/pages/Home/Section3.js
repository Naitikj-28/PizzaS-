import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image1 from "../../assets/menu/Pizza-11.jpg";
import Image2 from "../../assets/menu/Pizza-12.jpg";
import Image3 from "../../assets/menu/Pizza-13.jpg";
import Image4 from "../../assets/menu/Pizza-14.jpg";
import Image5 from "../../assets/menu/Pizza-15.jpg";
import Image6 from "../../assets/menu/Pizza-16.jpg";
import Image7 from "../../assets/menu/Pizza-17.jpg";
import Image8 from "../../assets/menu/Pizza-18.jpg";
import Cards from "../../components/Layouts/Cards";
import { Link } from "react-router-dom";

// Mock Data Cards
const mockData = [
  {
    id: "0001",
    image: Image1,
    title: "Garden Feast",
    paragraph: "Spicy paneer, bell peppers, onions, olives, tomato salsa",
    rating: 5,
    price: 99.15,
  },
  {
    id: "0002",
    image: Image2,
    title: "Rustic Delight",
    paragraph: "Smoked chicken, sharp cheddar, caramelized onions, herbs",
    rating: 4.5,
    price: 99.32,
  },
  {
    id: "0003",
    image: Image3,
    title: "Triple Cheese Melt",
    paragraph: "Mozzarella, parmesan, cheddar, with roasted tomato base",
    rating: 4,
    price: 69.15,
  },
  {
    id: "0004",
    image: Image4,
    title: "Fiesta Verde",
    paragraph: "Jalapeños, sweet corn, fresh tomato, oregano, chili flakes",
    rating: 3.5,
    price: 99.25,
  },
  {
    id: "0005",
    image: Image5,
    title: "Farmhouse Explosion",
    paragraph: "Loaded with mushrooms, capsicum, onions, and creamy cheese",
    rating: 3.0,
    price: 59.25,
  },
  {
    id: "0006",
    image: Image6,
    title: "Five Cheese Overdrive",
    paragraph: "Mozzarella, gouda, cheddar, ricotta, and cream cheese layers",
    rating: 3,
    price: 79.18,
  },
  {
    id: "0007",
    image: Image7,
    title: "Mega Veg Supreme",
    paragraph: "Crispy crust with paneer, capsicum, onion, and jalapeños",
    rating: 2.5,
    price: 99.19,
  },
  {
    id: "0008",
    image: Image8,
    title: "Zesty Paneer Kick",
    paragraph: "Tandoori paneer, red paprika, onion, and chili cheese drizzle",
    rating: 3.5,
    price: 89.12,
  },
  // Add more mock data objects as needed
];

// Rating Logical Data
const renderRatingIcons = (rating) => {
  const stars = [];

  for (let i = 0; i < 5; i++) {
    if (rating > 0.5) {
      stars.push(<i key={i} className="bi bi-star-fill"></i>);
      rating--;
    } else if (rating > 0 && rating < 1) {
      stars.push(<i key={"half"} className="bi bi-star-half"></i>);
      rating--;
    } else {
      stars.push(<i key={`empty${i}`} className="bi bi-star"></i>);
    }
  }
  return stars;
};

function Section3() {
  return (
    <section className="menu_section">
      <Container>
        <Row>
          <Col lg={{ span: 8, offset: 2 }} className="text-center mb-5">
            <h2>OUR SIGNATURE PIZZAS</h2>
            <p className="para">
              Experience the flavors of our handcrafted pizzas made with
              passion, fresh ingredients, and creative combinations
            </p>
          </Col>
        </Row>
        <Row>
          {mockData.map((cardData, index) => (
            <Cards
              key={index}
              image={cardData.image}
              rating={cardData.rating}
              title={cardData.title}
              paragraph={cardData.paragraph}
              price={cardData.price}
              renderRatingIcons={renderRatingIcons}
            />
          ))}
        </Row>

        <Row className="pt-5">
          <Col sm={6} lg={5}>
            <div className="ads_box ads_img1 mb-5 mb-md-0">
              <h4 className="mb-0">GET A FREE</h4>
              <h5>FRIES</h5>
              <Link to="/" className="btn btn_red px-4 rounded-0">
                Learn More
              </Link>
            </div>
          </Col>
          <Col sm={6} lg={7}>
            <div className="ads_box ads_img2">
              <h4 className="mb-0">LIMITED TIME OFFER</h4>
              <h5>FREE DRINKS WITH COMBO</h5>
              <Link to="/" className="btn btn_red px-4 rounded-0">
                Learn More
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Section3;
