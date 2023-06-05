import "./Footer.css";
import logo from "../../assets/logo.svg";
import social from "../../assets/social.svg";
const Footer = () => {
  return (
    <div className="footer-cont">
      <div className="log">
        <img src={logo} alt="" />
        <ul>
          <li>Browse</li>
          <li>Games</li>
          <li>Controller</li>
          <li>Inside</li>
        </ul>
        <img src={social} alt="" />
      </div>
      <div className="log2">
        <p>© Microsoft 2021</p>
        <p>Contact us Privacy & cookies</p>
      </div>
    </div>
  );
};

export default Footer;
