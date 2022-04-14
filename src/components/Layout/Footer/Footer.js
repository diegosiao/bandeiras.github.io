import React from "react";
import footerBandImg from "../../../assets/img/footer-band.png";

const Footer = () => {
  return (
    <footer
      style={{
        paddingTop: 0,
        paddingBottom: 650,
        backgroundColor: "#2a3a85",
        textAlign: "center",
        color: "white",
        fontSize: "small",
      }}
    >
      <img
        src={footerBandImg}
        alt="Logo Bandeiras do Brasil.org"
        style={{ margin: 0, width: "100%" }}
      />
      <br />
      <span>Bandeiras do Brasil.org</span>
      <br />
      Envie sua sugestão de bandeira para{" "}
      <a href="mailto:bandeirasdobrasil@outlook.com">
        bandeirasdobrasil@outlook.com
      </a>
    </footer>
  );
};

export default Footer;
