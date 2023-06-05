import "./Control.css";
import full from "../../assets/full.svg";
import right from "../../assets/right.svg";
import dpad from "../../assets/dpad.svg";
import flash from "../../assets/flash.svg";

const Control = () => {
  return (
    <div className="control-cont">
      <h1>
        Complete <span>control</span>
      </h1>
      <div className="dwn">
        <div className="dwn-left">
          <img src={full} alt="" />
          <img src={dpad} alt="" />
        </div>
        <div className="dwn-right">
          <div className="wording">
            <p className="blah">
              The new Xbox Wireless Controller brings elegant design, refined
              comfort, and instant sharing to a familiar favorite.
            </p>
          </div>
          <img src={right} alt="" />
          <div className="grre">
            <h2>Compatible with games on Windows 10</h2>
            <p>
              The gamepad fully supports Windows 10, you can play all the games
              of this platform and switch easily
            </p>
            <img src={flash} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Control;
