import React from "react";
import { Row } from "react-bootstrap";

const PageTitle = ({ title, subtitle }) => {
  return (
    <Row>
      <h1>{title}</h1>
      <h3>{subtitle}</h3>
    </Row>
  );
};

export default PageTitle;
