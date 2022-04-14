import { Card, Col, Row } from "react-bootstrap";
import {
  FacebookLoginButton,
  GithubLoginButton,
  GoogleLoginButton,
  TwitterLoginButton,
} from "react-social-login-buttons";

const Entrar = () => {
  return (
    <>
      <Row>
        <Col md={4}></Col>
        <Col xs={12} md={4}>
          <Card style={{ padding: 24 }}>
            <FacebookLoginButton />
            <GoogleLoginButton />
            <TwitterLoginButton />
            <GithubLoginButton />
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Entrar;
