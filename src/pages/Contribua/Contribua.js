import React, { useState } from "react";
import { Row, Col, Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const valores = ["1", "5", "10"];

const Contribua = () => {
  const [valor, setValor] = useState("5");
  const navigate = useNavigate();

  console.log(valor);
  return (
    <>
      <Row>
        <h1>Contribua</h1>
        <h3>A Internet é cheia de anúncios. Aqui não.</h3>
      </Row>
      <Row>
        <Col>
          <p>
            Para manter esse projeto contamos com a sua ajuda. Manter um site
            funcionando envolve grandes despesas. Mas até aqui, o apoio de
            brasileiros que amam seu país e lutam por um futuro melhor tem sido
            o bastante para seguir em frente.
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>
            Não aceitamos doações de políticos, empresas ou grupos de interesse.
            Apenas cidadãos.
          </p>
        </Col>
      </Row>
      <Row>
        <Col xs={6}>
          <Form.Select
            size="lg"
            value={valor}
            onChange={(e) => setValor(e.target.value)}
          >
            {valores.map((item) => (
              <option
                key={item}
                value={item}
              >{`Contribua com R$${item}`}</option>
            ))}
            <option value="?">Contribua com qualquer valor</option>
          </Form.Select>
        </Col>
      </Row>
      <Row>
        <Col>
          <br />
          <Button onClick={() => navigate("/")}>Voltar</Button>
        </Col>
      </Row>
    </>
  );
};

export default Contribua;
