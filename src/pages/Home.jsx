import React, { useState } from "react";
import Helmet from "../components/Helmet/Helmet";
import { Col, Container, Row } from "reactstrap";
import heroImg from "../assets/images/hero-img.png";
import "../styles/home.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Services from "../services/Services";
import ProductsList from "../components/UI/ProductsList";
import products from "../assets/data/products";
import { useEffect } from "react";

const Home = () => {
  const [tendingProducts, setTendingProducts] = useState([]);
  const [bestSalesProducts, setBestSalesProducts] = useState([]);
  const year = new Date().getFullYear();

  useEffect(() => {
    const filteredTrendingProducts = products?.filter(
      (item) => item.category === "chair"
    );

    const filteredBestSalesProducts = products?.filter(
      (item) => item.category === "sofa"
    );

    setTendingProducts(filteredTrendingProducts);
    setBestSalesProducts(filteredBestSalesProducts);
  }, []);

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

      {/* Section for trending products */}
      <section className="trending__products">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section__title">Trending Products</h2>
            </Col>
            <ProductsList data={tendingProducts} />
          </Row>
        </Container>
      </section>

      {/* Best Sales Products */}
      <section className="best__sales">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section__title">Best Sales</h2>
            </Col>

            <ProductsList data={bestSalesProducts} />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
