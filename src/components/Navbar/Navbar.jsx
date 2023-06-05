import "./Navbar.css";
import logo from "../../assets/logo.svg";

const Navbar = () => {
  return (
    <div className="nav-container">
      <img src={logo} alt="" />
      <div className="list">
        <ul>
          <li>Browse</li>
          <li>Games</li>
          <li>Controller</li>
          <li>Inside</li>
        </ul>
      </div>
      <button className="nav-btn">Order Console</button>
    </div>
  );
};

export default Navbar;
