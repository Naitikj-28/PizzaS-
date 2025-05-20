import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "../../styles/MenuStyle.css";
import Image1 from "../../assets/menu/Pizza-11.jpg";
import Image2 from "../../assets/menu/Pizza-12.jpg";
import Image3 from "../../assets/menu/Pizza-13.jpg";
import Image4 from "../../assets/menu/Pizza-14.jpg";
import Image5 from "../../assets/menu/Pizza-15.jpg";
import Image6 from "../../assets/menu/Pizza-16.jpg";
import Image7 from "../../assets/menu/Pizza-17.jpg";
import Image8 from "../../assets/menu/Pizza-18.jpg";

// Sample pizza items with image URLs (used directly in JSX)
const menuItems = [
    {
        id: 1,
        name: "Margherita",
        description: "Classic delight with 100% real mozzarella cheese.",
        price: "$8.99",
        image: "https://images.pexels.com/photos/3644/pizza-restaurant-dinner-lunch.jpg",
    },
    {
        id: 2,
        name: "Farmhouse",
        description: "A pizza loaded with veggies and cheesy goodness.",
        price: "$10.99",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPOrCG7mt2q9888-fUyoBUAyEBgEOgLV1rFA&s",
    },
    {
        id: 3,
        name: "Pepperoni",
        description: "Topped with pepperoni and extra cheese for meat lovers.",
        price: "$11.99",
        image: "https://images.pexels.com/photos/3682837/pexels-photo-3682837.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
        id: 4,
        name: "BBQ Chicken",
        description: "BBQ chicken, onions, and peppers on a cheesy base.",
        price: "$12.99",
        image: "https://images.pexels.com/photos/15832883/pexels-photo-15832883/free-photo-of-ready-to-eat-pizza-with-two-dipping-sauces.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
        id: 5,
        name: "Veggie Supreme",
        description: "Packed with mushrooms, olives, capsicum & onions.",
        price: "$9.99",
        image: "https://images.pexels.com/photos/2619970/pexels-photo-2619970.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
        id: 6,
        name: "Cheese Burst",
        description: "Loaded with oozing cheese inside the crust.",
        price: "$10.49",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGKtrotOBc6MZILXyav20YRHBeA1jKsVWuqg&s",
    },
    {
        id: 7,
        name: "Garden Feast",
        description: "Jalapeños, sweet corn, fresh tomato, oregano, chili flakes",
        price: "$20.15",
        image: Image1,
    },
    {
        id: 8,
        name: "Rustic Delight",
        description: "Smoked chicken, sharp cheddar, caramelized onions, herbs",
        price: "$25.34",
        image: Image2,
    },
    {
        id: 9,
        name: "Triple Cheese Melt",
        description: "Mozzarella, parmesan, cheddar, with roasted tomato base",
        price: "$19.03",
        image: Image3,
    },
    {
        id: 10,
        name: "Fiesta Verde",
        description: "Spicy paneer, bell peppers, onions, olives, tomato salsa",
        price: "$12.45",
        image: Image4,
    },
    {
        id: 11,
        name: "FarmHouse Explosion",
        description: "Loaded with mushrooms, capsicum, onions, and creamy cheese",
        price: "$9.25",
        image: Image5,
    },
    {
        id: 12,
        name: "Five Cheese Overload",
        description: "Mozzarella, gouda, cheddar, ricotta, and cream cheese layers",
        price: "$12.23",
        image: Image6,
    },
    {
        id: 13,
        name: "Meg Veg Supreme",
        description: "Crispy crust with paneer, capsicum, onion, and jalapeños",
        price: "$30.00",
        image: Image7,
    },
    {
        id: 14,
        name: "Zesty Paneer Kick",
        description: "Tandoori paneer, red paprika, onion, and chili cheese drizzle",
        price: "$10.30",
        image: Image8,
    },
    {
        id: 15,
        name: "Grill Garlic Sticks",
        description: "Crispy garlic bread sticks grilled to perfection with herbs and butter.",
        price: "$7.30",
        image: "https://media.istockphoto.com/id/539823694/photo/garlic-bread-with-cheese.jpg?b=1&s=612x612&w=0&k=20&c=NCPFl_FKkYJ6ZhPIbVNRDjGuxV98FgCRc9Z4Mcot1vw=",
    },
    {
        id: 16,
        name: "Tomato Garlic Sticks",
        description: "Garlic breadsticks topped with tangy tomato seasoning and melted cheese.",
        price: "$12.30",
        image: "https://images.pexels.com/photos/7432986/pexels-photo-7432986.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
        id: 17,
        name: "Cheesy Garlic",
        description: "Soft garlic bread loaded with gooey cheese and a buttery finish.",
        price: "$4.30",
        image: "https://images.pexels.com/photos/6170675/pexels-photo-6170675.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
        id: 18,
        name: "Red Sauce Pasta",
        description: "Penne pasta tossed in rich tomato-based sauce with Italian herbs.",
        price: "$34.30",
        image: "https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
        id: 19,
        name: "White Sauce Cheese Pasta",
        description: "Creamy white sauce pasta topped with mozzarella and parmesan cheese.",
        price: "$33.30",
        image: "https://images.pexels.com/photos/25524080/pexels-photo-25524080/free-photo-of-pasta-with-frying-cheese-on-the-top.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
    },
    {
        id: 20,
        name: "Basil Pesto Delight",
        description: "Spaghetti tossed in aromatic basil pesto sauce with garlic, parmesan, and olive oil.",
        price: "$26.30",
        image: "https://media.istockphoto.com/id/1353758538/photo/image-of-metal-fork-twirling-pesto-spaghetti-held-in-hand-of-unrecognisable-person-pasta.jpg?b=1&s=612x612&w=0&k=20&c=dQA8Tk35634lh0B5ahjpiHwVi-j_fAGRLnPg4lgEOcs="
    },
    {
        id: 21,
        name: "Herb Garden Spaghetti",
        description: "Spaghetti infused with fresh herbs, olive oil, and a touch of lemon zest, topped with parmesan.",
        price: "$25.30",
        image: "https://images.pexels.com/photos/31637792/pexels-photo-31637792/free-photo-of-delicious-spaghetti-bolognese-with-fresh-herbs.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
    }
];

const MenuSection = () => {
    return (
        <section className="menu-section py-5">
            <Container>
                <h2 className="text-center mb-4">Our Menu</h2>
                <Row>
                    {menuItems.map((item) => (
                        <Col md={4} className="mb-4" key={item.id}>
                            <Card className="menu-card h-100">
                                <Card.Img variant="top" src={item.image} alt={item.name} />
                                <Card.Body>
                                    <Card.Title>{item.name}</Card.Title>
                                    <Card.Text>{item.description}</Card.Text>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <span className="price">{item.price}</span>
                                        <Button variant="danger">Add to Cart</Button>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default MenuSection;
