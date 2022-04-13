import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Home from "./pages/Home/Home";
import Contribua from "./pages/Contribua/Contribua";
import Sobre from "./pages/Sobre/Sobre";
import Page404 from "./pages/Page404/Page404";

import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <Container fluid>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contribua" element={<Contribua />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/*" element={<Page404 />} />
      </Routes>
    </Container>
  );
};

export default App;
