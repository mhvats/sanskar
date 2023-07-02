import PropTypes from "prop-types";
import "./card.css";
function Card(props) {
  return (
    <div className="cards">
      <div className="card">
        <img src={props.image} alt="mypic" className="card_img" />
        <div className="card__info">
          <span className="card__category">{props.category}</span>
          <h3 className="card__title">{props.title}</h3>
          <a href={props.link} target="_blank" rel="noopener noreferrer">
            <button className="btn">Watch Now</button>
          </a>
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  image: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default Card;
