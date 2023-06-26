import React from "react";
import "./header.css";
import { Container, Row } from "reactstrap";

import logo from "../../assets/images/eco-logo.png";

const Header = () => {
  return (
    <header className="header">
      <Container>
        <Row>
          <div className="nav__wrapper">
            <div className="logo">
              <img src={logo} alt="" />
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
