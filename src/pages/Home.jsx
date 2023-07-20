import React, { useState } from "react";
import Helmet from "../components/Helmet/Helmet";
import { Col, Container, Row } from "reactstrap";
import heroImg from "../assets/images/hero-img.png";
import counterImg from "../assets/images/counter-timer-img.png";
import "../styles/home.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Services from "../services/Services";
import ProductsList from "../components/UI/ProductsList";
import { useEffect } from "react";
import Clock from "../components/UI/Clock";

import useGetData from "../hooks/useGetData";

const Home = () => {
  const { data: products, loading } = useGetData("products");

  const [tendingProducts, setTendingProducts] = useState([]);
  const [bestSalesProducts, setBestSalesProducts] = useState([]);
  const [mobileProducts, setMobileProducts] = useState([]);
  const [wirelessProducts, setWirelessProducts] = useState([]);
  const [popularProducts, setPopularProducts] = useState([]);

  const year = new Date().getFullYear();

  useEffect(() => {
    const filteredTrendingProducts = products?.filter(
      (item) => item.category === "chair"
    );

    const filteredBestSalesProducts = products?.filter(
      (item) => item.category === "sofa"
    );

    const filteredMobileProducts = products?.filter(
      (item) => item.category === "mobile"
    );

    const filteredWirelessProducts = products?.filter(
      (item) => item.category === "wireless"
    );

    const filteredPopularProducts = products?.filter(
      (item) => item.category === "watch"
    );

    setTendingProducts(filteredTrendingProducts);
    setBestSalesProducts(filteredBestSalesProducts);
    setMobileProducts(filteredMobileProducts);
    setWirelessProducts(filteredWirelessProducts);
    setPopularProducts(filteredPopularProducts);
  }, [products]);

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

            {loading ? (
              <h5 className="fw-bold">Loading....</h5>
            ) : (
              <ProductsList data={tendingProducts} />
            )}
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

            {loading ? (
              <h5 className="fw-bold">Loading....</h5>
            ) : (
              <ProductsList data={bestSalesProducts} />
            )}
          </Row>
        </Container>
      </section>

      {/* timer counter section */}
      <section className="timer__count">
        <Container>
          <Row>
            <Col lg="6" md="12" className="count__down-col">
              <div className="clock__top-content">
                <h4 className="text-white fs-6 mb-2">Limited Offers</h4>
                <h3 className="text-white fs-5 mb-3">Quality Armchair</h3>
              </div>
              <Clock />
              <motion.button
                whileTap={{ scale: 1.2 }}
                className="buy__btn store__btn">
                <Link to="/shop">Visit Store</Link>
              </motion.button>
            </Col>

            <Col lg="6" md="12" className="text-end counter__img">
              <img src={counterImg} alt="CounterImage" />
            </Col>
          </Row>
        </Container>
      </section>

      {/*  New Arrival*/}
      <section className="new__arrivals">
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <h2 className="section__title">New Arrivals</h2>
            </Col>

            {loading ? (
              <h5 className="fw-bold">Loading....</h5>
            ) : (
              <ProductsList data={mobileProducts} />
            )}

            {loading ? (
              <h5 className="fw-bold">Loading....</h5>
            ) : (
              <ProductsList data={wirelessProducts} />
            )}
          </Row>
        </Container>
      </section>

      {/* Popular category */}
      <section className="popular__category">
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <h2 className="section__title">Popular In Category</h2>
            </Col>
            <ProductsList data={popularProducts} />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
