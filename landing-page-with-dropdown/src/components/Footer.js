import clientAudiophile from "../images/clientAudiophile.svg";
import clientDatabiz from "../images/clientDatabiz.svg";
import clientMaker from "../images/clientMaker.svg";
import clientMeet from "../images/clientMeet.svg";
import { footerStyles, clientLogo } from "../styles/footer-styles";
const Footer = () => {
  return (
    <div style={footerStyles}>
      <img style={clientLogo} src={clientDatabiz} />
      <img style={clientLogo} src={clientAudiophile} />
      <img style={clientLogo} src={clientMeet} />
      <img style={clientLogo} src={clientMaker} />
    </div>
  );
};

export default Footer;
