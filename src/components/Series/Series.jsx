import "./Series.css";
import console from "../../assets/console.svg";
import sales from "../../assets/sales.svg";

const Series = () => {
  return (
    <div className="series-cont">
      <h1>Xbox series X</h1>
      <h2>$499.99</h2>
      <p>Pre Order</p>
      <div className="img-contianer">
        <img className="series-img" src={console} alt="" />
        <div className="gradient-overlay"></div>
      </div>
      <img  className="samuel" src={console} alt="" />
      <img className="musta" src={sales} alt="" />
    </div>
  );
};

export default Series;
