// import drim from "../../assets/dreams.svg";
import "./Dreams.css";
const Dreams = () => {
  return (
    <div className="dreams-cont">
      <h1>
        The fastest and the most powerful console xbox for the{" "}
        <span>entire history</span>
      </h1>
      {/* <img src={drim} alt="" /> */}
      <div className="dreams">
        <div className="dreams-in">
          <h2>Power you dreams</h2>
          <p>
            From future adventures, to current obsessions, to classic titles,
            thousands of favorites across four generations of Xbox look and play
            best on Xbox Series X.
          </p>
          <button>learn more</button>
        </div>
      </div>
    </div>
  );
};

export default Dreams;
