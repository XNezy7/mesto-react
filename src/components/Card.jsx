/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
function Card(props) {
  function handleClick() {
    props.onCardClick(props.card);
  }
  return (
    <li className="places__item card">
      <img
        className="card__image"
        src={props.card.link}
        alt={props.card.name}
        onClick={handleClick}
      />
      <button
        type="button"
        className="card__delete-photo"
        id="card__delete-photo"
      ></button>
      <div className="card__group">
        <h2 className="card__title">{props.card.name}</h2>
        <div className="card__description">
          <button type="button" className="card__like-button"></button>
          <span className="card__like-count">{props.card.likes.length}</span>
        </div>
      </div>
    </li>
  );
}
// {props.card.likes}
export default Card;
