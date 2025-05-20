import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./components/Layouts/About";
import MenuSection from "./components/Layouts/MenuSection";
import Header from "./components/Layouts/Header";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<MenuSection />} />
      </Routes>
    </Router>
  );
}

export default App;

