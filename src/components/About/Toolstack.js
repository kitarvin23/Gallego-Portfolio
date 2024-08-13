import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiMacos,
  SiWindows,
  SiVisualstudiocode,
  SiAdobecreativecloud,
  SiAndroid,
  SiIos,
  SiXcode,

} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiXcode />
      </Col>
       <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
       <Col xs={4} md={2} className="tech-icons">
        <SiAdobecreativecloud />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMacos />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiWindows />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMacos />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAndroid />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiIos />
      </Col>
    </Row>
  );
}

export default Toolstack;
