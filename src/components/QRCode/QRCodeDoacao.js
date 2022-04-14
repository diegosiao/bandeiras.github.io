import qrcodeImg from "../../assets/img/qr-code-0.png";
import qrcode1Img from "../../assets/img/qr-code-1.png";
import qrcode5Img from "../../assets/img/qr-code-5.png";
import qrcode10Img from "../../assets/img/qr-code-10.png";
import qrcode50Img from "../../assets/img/qr-code-50.png";
import qrcode100Img from "../../assets/img/qr-code-100.png";

const QRCodeDoacao = ({ valor }) => {
  switch (valor) {
    case "1":
      return <img width={190} src={qrcode1Img} alt="QR Code doação R$1" />;
    case "5":
      return <img width={190} src={qrcode5Img} alt="QR Code doação R$5" />;
    case "10":
      return <img width={190} src={qrcode10Img} alt="QR Code doação R$10" />;
    case "50":
      return <img width={190} src={qrcode50Img} alt="QR Code doação R$50" />;
    case "100":
      return <img width={190} src={qrcode100Img} alt="QR Code doação R$100" />;
    default:
      return <img width={190} src={qrcodeImg} alt="QR Code doação" />;
  }
};

export default QRCodeDoacao;
