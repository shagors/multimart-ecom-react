import React from "react";
import Helmet from "../components/Helmet/Helmet";
import { Col, Container, Row } from "reactstrap";
import heroImg from "../assets/images/hero-img.png";
import "../styles/home.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Services from "../services/Services";

const Home = () => {
  const year = new Date().getFullYear();
  return (
    <Helmet title={"Home"}>
      {/* Hero Section */}
      <section className="hero__section">
        <Container>
          <Row>
            <Col lg={6} md={6}>
              <div className="hero__content">
                <p className="hero__subtitle">Treding Product in {year}</p>
                <h2>Make your Outfit More Minimalistic & Modern</h2>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Ipsum impedit error unde, praesentium cupiditate suscipit
                  delectus ratione eos laborum amet?
                </p>
                <motion.button whileTap={{ scale: 1.2 }} className="buy__btn">
                  <Link to="/shop">SHOP NOW</Link>
                </motion.button>
              </div>
            </Col>

            <Col lg={6} md={6}>
              <div className="hero__img">
                <img src={heroImg} alt="HeroImage" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Services */}
      <Services />
    </Helmet>
  );
};

export default Home;
