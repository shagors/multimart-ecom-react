import React from "react";
import "./header.css";
import { Container, Row } from "reactstrap";

import logo from "../../assets/images/eco-logo.png";
import userIcon from "../../assets/images/user-icon.png";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <Container>
        <Row>
          <div className="nav__wrapper">
            <div className="logo">
              <img src={logo} alt="Brand" />
              <div>
                <h1>MultiMart</h1>
              </div>
            </div>

            <div className="navigation">
              <ul className="menu">
                <li className="nav__item">
                  <NavLink to="/home">Home</NavLink>
                </li>
                <li className="nav__item">
                  <NavLink to="/shop">Shop</NavLink>
                </li>
                <li className="nav__item">
                  <NavLink to="/cart">Cart</NavLink>
                </li>
              </ul>
            </div>

            <div className="nav__icons">
              <span className="fav__icon">
                <i className="ri-heart-line"></i>
              </span>
              <span className="cart__icon">
                <i className="ri-shopping-bag-line"></i>
              </span>

              <span className="">
                <img src={userIcon} alt="ProfileImage" />
              </span>
            </div>

            <div className="mobile__menu">
              <span>
                <i className="ri-menu-line"></i>
              </span>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
