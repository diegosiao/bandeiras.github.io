import React from "react";
import { Button } from "react-bootstrap";
import logo from "../../assets/img/logo192.png";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="Brasil" />
        <h1>Bandeiras do Brasil</h1>
        <h3>
          Exija que seu candidato assine essas bandeiras antes de votar nele!
          <br />É rápido, é online, não tem desculpa!
        </h3>
        <p>
          A convergência de bandeiras que todo brasileiro que preza pela
          justiça, ética e moralidade defendem para o Brasil.
        </p>
        <ul>
          <li>1. Fim do "Foro Privilegiado"</li>
          <li>2. Tornar Crime hediondo a corrupção</li>
          <li>
            3. Fim do "Fundão Eleitoral". Financiamento zero de campanhas
            políticas com dinheiro público.
          </li>
          <li>3. Fim das Emendas Constitucionais</li>
          <li>
            4. Defesa da Análise do Impeachment dos Ministros do STF no plenário
            do Senado Federal
          </li>
        </ul>
        <p>
          Envie sua sugestão de bandeira para{" "}
          <a href="mailto:bandeirasdobrasil@outlook.com">
            bandeirasdobrasil@outlook.com
          </a>
        </p>
        <p>
          <Button onClick={() => navigate("/contribua")}>Contribuir</Button>
        </p>
      </header>
    </div>
  );
};

export default Home;
