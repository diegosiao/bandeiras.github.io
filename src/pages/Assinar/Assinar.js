import React, { useState } from "react";
import { Col, Form, Row, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import termoPresidentePdf from "../../assets/docs/termo-compromisso-presidente.pdf";
import termoDepFederalPdf from "../../assets/docs/termo-compromisso-deputado-federal.pdf";
import termoSenadorPdf from "../../assets/docs/termo-compromisso-senador.pdf";
import termoGovernadorPdf from "../../assets/docs/termo-compromisso-governador.pdf";
import termoDepEstadualPdf from "../../assets/docs/termo-compromisso-deputado-estadual.pdf";
import PageTitle from "../../components/Layout/Title/PageTitle";

const cargos = [
  { key: "presidente", label: "Presidente" },
  { key: "deputado-federal", label: "Deputador Federal" },
  { key: "senador", label: "Senador" },
  { key: "governador", label: "Governador" },
  { key: "deputado-estadual", label: "Deputado Estadual" },
];

const Assinar = () => {
  const [cargo, setCargo] = useState("Presidente");
  const navigate = useNavigate();

  return (
    <>
      <PageTitle
        title="Assinar Compromisso"
        subtitle="Candidato, você está prestes a assumir um compromisso com seus eleitores"
      />
      <Row>
        <Col>Assuma esse compromisso com critério e responsabilidade.</Col>
      </Row>
      <Row className="mt-4">
        <Col xs={2}>
          <h5>1° Passo</h5>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>
            Baixe e leia com atenção o termo de compromisso de acordo com seu
            cargo:
          </p>
          <Form.Select
            size="lg"
            value={cargo}
            onChange={(e) => {
              setCargo(e.target.value);
              switch (e.target.value) {
                case "presidente":
                  return window.open(`${termoPresidentePdf}`);
                case "deputado-federal":
                  return window.open(`${termoDepFederalPdf}`);
                case "senador":
                  return window.open(`${termoSenadorPdf}`);
                case "governador":
                  return window.open(`${termoGovernadorPdf}`);
                case "deputado-estadual":
                  return window.open(`${termoDepEstadualPdf}`);

                default:
                  break;
              }
            }}
          >
            {cargos.map((item) => (
              <option
                key={item.key}
                value={item.key}
              >{`Termo de Compromisso para ${item.label}`}</option>
            ))}
          </Form.Select>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <h5>2° Passo</h5>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>
            Assine digitalmente utilizando uma conta válida do Gov.BR do Governo
            Federal no site{" "}
            <a
              href="https://assinador.iti.br/assinatura"
              target="_blank"
              rel="noreferrer"
            >
              https://assinador.iti.br/assinatura
            </a>
            .
          </p>
          <p>
            Lembrando que o Gov.BR é um serviço público sem nenhum vínculo com
            esse movimento.
          </p>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <h5>3° Passo: </h5>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>
            Envie o documento Assinado digitalmente para{" "}
            <a href="mailto:bandeirasdobrasil@outlook.com">
              bandeirasdobrasil@outlook.com
            </a>
            .
          </p>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <h5>Pronto!</h5>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>
            Após o envio e validação seu status no nosso site será atualizado e
            seus eleitores notificados.
          </p>
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

export default Assinar;
