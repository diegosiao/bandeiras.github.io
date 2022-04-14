import React from "react";
import { Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <header>
        <h3>
          Exija que seu candidato assine um compromisso com essas bandeiras
          antes de votar nele!
          <br />É rápido e 100% online, não aceite desculpas!
        </h3>
        <p>
          A convergência de bandeiras que todo brasileiro que preza pela
          justiça, ética e moralidade defende para o Brasil.
        </p>
        <ul>
          <li>
            1. Fim do "Foro Privilegiado" <b>154.588 Votos</b>
          </li>
          <li>
            2. Tornar Crime hediondo a corrupção <b>115.354 Votos</b>
          </li>
          <li>
            3. Fim do "Fundão Eleitoral". Financiamento zero de campanhas
            políticas com dinheiro público <b>114.249 Votos</b>
          </li>
          <li>
            3. Fim das Emendas Constitucionais <b>110.112 Votos</b>
          </li>
          <li>
            4. Defesa da Análise do Impeachment dos Ministros do STF no plenário
            do Senado Federal <b>102.544 Votos</b>
          </li>
        </ul>
      </header>
      <Row className="mt-5">
        <Col>
          <h4>Bandeiras por Estado e Município</h4>
        </Col>
        <Col>
          <h4>Candidatos</h4>
        </Col>
      </Row>
      <Row>
        <Col>[Em Desenvolvimento]</Col>
        <Col>[Em Desenvolvimento]</Col>
      </Row>
      <Row className="mt-5">
        <Col>
          <Button onClick={() => navigate("/votar")}>
            Sou Cidadão, quero votar
          </Button>
          {"  "}
          <Button variant="danger" onClick={() => navigate("/assinar")}>
            Sou Candidato, quero assinar
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default Home;
