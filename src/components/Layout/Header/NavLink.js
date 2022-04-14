import React from "react";
import { Nav } from "react-bootstrap";
import { useLocation } from "react-router-dom";

const NavLink = ({ label, pathname }) => {
  const location = useLocation();
  return (
    <Nav.Link active={location.pathname === pathname} eventKey={pathname}>
      {label}
    </Nav.Link>
  );
};

export default NavLink;
