import React from "react";
import { Col, Nav, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import headerImg from "../../../assets/img/header.png";
import NavLink from "./NavLink";

const Header = () => {
  const navigate = useNavigate();

  return (
    <>
      <header
        style={{
          backgroundImage: `url(${headerImg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          color: "white",
          paddingTop: 60,
          paddingBottom: 60,
        }}
      >
        <Row>
          <Col xs={4}></Col>
          <Col xs={4}>
            <h1 style={{ textAlign: "center" }}>Bandeiras do Brasil.org</h1>
          </Col>
          <Col></Col>
        </Row>
      </header>
      <Nav
        activeKey="/"
        onSelect={(selectedKey) => navigate(selectedKey)}
        style={{ backgroundColor: "#eeeeee" }}
      >
        <Nav.Item>
          <NavLink pathname={"/"} label="Início" />
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="/entrar">Entrar</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <NavLink pathname={"/sobre"} label="Sobre" />
        </Nav.Item>
        <Nav.Item>
          <NavLink pathname={"/contribua"} label="Contribua" />
        </Nav.Item>
      </Nav>
    </>
  );
};

export default Header;
