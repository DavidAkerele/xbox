import "./Hero.css";
import her from "../../assets/hero.svg";

const Hero = () => {
  return (
    <div className="hero-cont">
      <div className="writing">
        <h3>Completely View</h3>
        <h1>Xbox Series X</h1>
        <p>
          Experience 12 teraflops of graphics processing power and 4K resolution
          at up to 120 fps second with Xbox Series X. *
        </p>
      </div>
      <img className="hero-img" src={her} alt="" />
    </div>
  );
};

export default Hero;
