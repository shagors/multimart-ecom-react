import React from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import { Col, Container, Row } from "reactstrap";
import "../styles/cart.css";
import { cartActions } from "../redux/slices/cartSlice";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  console.log(cartItems);
  return (
    <Helmet title="Cart">
      <CommonSection title="Shooping Cart" />
      <section>
        <Container>
          <Row>
            <Col lg="9">
              {cartItems?.length === 0 ? (
                <h2 className="fs-4 text-center">No items added to cart</h2>
              ) : (
                <table className="table bordered">
                  <thead>
                    <tr>
                      <th>Image</th>
                      <th>Title</th>
                      <th>Price</th>
                      <th>Qty</th>
                      <th>Delete</th>
                    </tr>
                  </thead>

                  <tbody>
                    {cartItems.map((item, index) => (
                      <Tr item={item} key={index} />
                    ))}
                  </tbody>
                </table>
              )}
            </Col>

            <Col lg="3">
              <div>
                <h6 className="d-flex align-items-center justify-content-between">
                  Subtotla
                  <span className="fs-4 fw-bold">${totalAmount}</span>
                </h6>
              </div>
              <p className="fs-6 mt-2">
                taxes amd shipping cost will be calculate in checkout
              </p>
              <div className="mt-3 d-flex flex-column">
                <buton className="buy__btn w-100 text-center">
                  <Link to="/checkout">Checkout</Link>
                </buton>

                <buton className="buy__btn w-100 mt-3 text-center">
                  <Link to="/shop">Continue Shopping</Link>
                </buton>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

const Tr = ({ item }) => {
  const dispatch = useDispatch();

  const deleteProduct = () => {
    dispatch(cartActions.deleteItem(item.id));
  };
  return (
    <tr>
      <td>
        <img src={item.imgUrl} alt="product-img" className="" />
      </td>
      <td>{item.productName}</td>
      <td>${item.price}</td>
      <td>{item.quantity} pc</td>
      <motion.td whileTap={{ scale: 1.1 }} onClick={deleteProduct}>
        <i className="ri-delete-bin-line"></i>
      </motion.td>
    </tr>
  );
};

export default Cart;
