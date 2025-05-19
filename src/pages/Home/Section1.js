// import React from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import hero3 from "../../assets/hero/hero5.png";
// import { Link } from "react-router-dom";

// const Section1 = () => {
//   return (
//     <section className="hero_section">
//       <Container>
//         <Row>
//           <Col lg={7} className="mb-5 mb-lg-0">
//             <div className="position-relative">
//               <img src={hero3} className="img-fluid" alt="Delicious Pizza" /> 
//               <div className="price_badge">
//                 <div className="badge_text">
//                   <h4 className="h4_xs">Just</h4>
//                   <h4 className="h3_lg">$6.99</h4>
//                 </div>
//               </div>
//             </div>
//           </Col>
//           <Col lg={5}>
//             <div className="hero_text text-center">
//               <h1 className="text-white">Hot & Fresh Pizza</h1>
//               <h2 className="text-white">Straight From the Oven</h2>
//               <p className="text-white pt-2 pb-4">
//                 Indulge in our cheesy, mouth-watering pizzas made with fresh
//                 ingredients and baked to perfection. Order now and satisfy your
//                 cravings!
//               </p>
//               <Link to="/" className="btn order_now">
//                 Order Now
//               </Link>
//             </div>
//           </Col>
//         </Row>
//       </Container>
//     </section>
//   );
// };

// export default Section1;
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import hero3 from "../../assets/hero/hero5.png";
import { Link } from "react-router-dom";

const Section1 = () => {
  return (
    <section className="hero_section">
      <Container>
        <Row className="align-items-center">
          <Col lg={7} className="mb-5 mb-lg-0">
            <div className="position-relative d-flex justify-content-end">
              <img
                src={hero3}
                alt="Delicious Pizza"
                style={{
                  width: "60%",
                  transform: "translateX(-40%)",
                }}
              />
              <div className="price_badge position-absolute" style={{ top: 20, left: 490 }}>
                <div className="badge_text">
                  <h4 className="h4_xs">Just</h4>
                  <h4 className="h3_lg">$6.99</h4>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={5}>
            <div className="hero_text text-center">
              <h1 className="text-white">Hot & Fresh Pizza</h1>
              <h2 className="text-white">Straight From the Oven</h2>
              <p className="text-white pt-2 pb-4">
                Indulge in our cheesy, mouth-watering pizzas made with fresh
                ingredients and baked to perfection. Order now and satisfy your
                cravings!
              </p>
              <Link to="/" className="btn order_now">
                Order Now
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Section1;
