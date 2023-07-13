import React from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import { Col, Container, Form, FormGroup, Row } from "reactstrap";
import "../styles/checkout.css";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

const Checkout = () => {
  const totalQty = useSelector((state) => state.cart.totalQuantity);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  return (
    <Helmet title="Checkout">
      <CommonSection title="Checkout" />
      <section>
        <Container>
          <Row>
            <Col lg="8">
              <h6 className="mb-4 fw-bold">Billing Information</h6>
              <Form className="billing__form">
                <FormGroup className="form__group">
                  <input type="text" placeholder="Enter your name" />
                </FormGroup>
                <FormGroup className="form__group">
                  <input type="email" placeholder="Enter your email" />
                </FormGroup>
                <FormGroup className="form__group">
                  <input type="number" placeholder="Phone Number" />
                </FormGroup>
                <FormGroup className="form__group">
                  <input type="text" placeholder="Street Address" />
                </FormGroup>
                <FormGroup className="form__group">
                  <input type="text" placeholder="City" />
                </FormGroup>
                <FormGroup className="form__group">
                  <input type="text" placeholder="Postal Code" />
                </FormGroup>
                <FormGroup className="form__group">
                  <input type="text" placeholder="Country" />
                </FormGroup>
              </Form>
            </Col>
            <Col lg="4">
              <div className="checkout__cart">
                <h6 className="">
                  Total Qty: <span>{totalQty} items</span>
                </h6>
                <h6 className="">
                  Subtotal: <span>${totalAmount}</span>
                </h6>
                <h6 className="">
                  <span>
                    Shipping: <br /> free shipping
                  </span>
                  <span>$0</span>
                </h6>
                <h4>
                  Total Cost: <span>${totalAmount}</span>
                </h4>
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  className="auth__btn w-100 p-2 rounded mt-3">
                  Place an Order
                </motion.button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Checkout;
