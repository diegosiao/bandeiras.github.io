import { Col, Row, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import PageTitle from "../../components/Layout/Title/PageTitle";

const Sobre = () => {
  const navigate = useNavigate();
  return (
    <>
      <PageTitle
        title="Sobre Nós"
        subtitle="Os eleitores merecem mais que promessas vazias"
      />
      <Row>
        <Col>
          Esse movimento surgiu por causa do sentimento de descolamento de
          nossos representantes com seu eleitorado.
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <Button onClick={() => navigate(-1)}>Voltar</Button>
        </Col>
      </Row>
    </>
  );
};

export default Sobre;
