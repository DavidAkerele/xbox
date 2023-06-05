import "./Perfect.css";
import comp from "../../assets/compo.svg";
import plus from "../../assets/plus.svg";
const Perfect = () => {
  return (
    <div className="perfect-container">
      <div className="perf">
        <h1>
          Technologically <span>perfect</span>
        </h1>
        <p>
          The new Xbox Wireless Controller brings elegant design, refined
          comfort, and instant sharing to a familiar favorite.
        </p>
      </div>
      <img src={comp} alt="" />
      <img className="plu" src={plus} alt="" />
      <img className="plu1" src={plus} alt="" />
      <img className="plu2" src={plus} alt="" />
      <img className="plu3" src={plus} alt="" />
    </div>
  );
};

export default Perfect;
