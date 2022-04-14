import React, { useState } from "react";
import { Row, Col, Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import PageTitle from "../../components/Layout/Title/PageTitle";
import QRCodeDoacao from "../../components/QRCode/QRCodeDoacao";

const valores = ["1", "5", "10", "50", "100"];

const Contribua = () => {
  const [valor, setValor] = useState("5");
  const navigate = useNavigate();
  return (
    <>
      <PageTitle
        title="Contribua"
        subtitle="A Internet é cheia de anúncios. Aqui não."
      />
      <Row>
        <Col>
          Para manter esse projeto contamos unicamente com a sua ajuda. Manter
          um site funcionando envolve grandes despesas. Mas acreditamos que o
          apoio de brasileiros que amam seu país e lutam por um futuro melhor é
          o suficiente para seguir em frente.
        </Col>
      </Row>
      <Row>
        <Col>
          <b>
            Não aceitamos doações de políticos, empresas ou grupos de interesse.
            Apenas cidadãos.
          </b>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={6}>
          <br />
          <Form.Select
            size="lg"
            value={valor}
            onChange={(e) => setValor(e.target.value)}
          >
            {valores.map((item) => (
              <option
                key={item}
                value={item}
              >{`Contribua via PIX com R$${item}`}</option>
            ))}
            <option value="0">Contribua via PIX com qualquer valor</option>
          </Form.Select>
        </Col>
      </Row>
      <Row style={{ textAlign: "center" }}>
        <Col xs={12} md={6}>
          <br />
          <QRCodeDoacao valor={valor} />
          <br />
          <span style={{ color: "gray", fontSize: "small" }}>
            Chave PIX: <b>bandeirasdobrasil@outlook.com</b> em nome de Diego
            Morais de Medeiros Rodrigues
          </span>
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

export default Contribua;
