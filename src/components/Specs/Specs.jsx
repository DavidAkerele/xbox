import "./Specs.css";
import fk from "../../assets/4k.svg";
import ote from "../../assets/120.svg";
import hdr from "../../assets/hdr.svg";
import v from "../../assets/v.svg";
const Specs = () => {
  return (
    <div className="specs-cont">
        <ul>
          <li>
            <img src={fk} alt="" />
            <p>True gaming</p>
          </li>
          <li>
            <img src={hdr} alt="" />
            <p>High Dynamic Range</p>
          </li>
          <li>
            <img src={ote} alt="" />
            <p>Frame Per Second</p>
          </li>
          <li>
            <img src={v} alt="" />
            <p>Velocity Architecture</p>
          </li>
        </ul>
    </div>
  );
};

export default Specs;
