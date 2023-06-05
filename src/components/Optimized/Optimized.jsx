import './Optimized.css'
import games from '../../assets/games.svg'
const Optimized = () => {
  return <div className='opt-container'>
    <div className="left">
        <h1>Optimized for series X-S</h1>
        <p>From future adventures, to current obsessions, to classic titles, thousands of favorites across four generations of Xbox look and play best on Xbox Series X.</p>
    </div>
    <img src={games} alt="" />
  </div>;
};

export default Optimized;
