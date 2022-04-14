import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Layout/Footer/Footer";
import Header from "./components/Layout/Header/Header";
import Assinar from "./pages/Assinar/Assinar";
import Contribua from "./pages/Contribua/Contribua";
import Entrar from "./pages/Entrar/Entrar";
import Home from "./pages/Home/Home";
import Page404 from "./pages/Page404/Page404";
import Sobre from "./pages/Sobre/Sobre";
import Votar from "./pages/Votar/Votar";

const App = () => {
  return (
    <>
      <Header />
      <Container style={{ padding: 24, marginBottom: 24 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/votar" element={<Votar />} />
          <Route path="/assinar" element={<Assinar />} />
          <Route path="/contribua" element={<Contribua />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/entrar" element={<Entrar />} />
          <Route path="/*" element={<Page404 />} />
        </Routes>
      </Container>
      <Footer />
    </>
  );
};

export default App;
