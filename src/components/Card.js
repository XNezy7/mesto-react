function Card(props) {
  function handleClick() {
    props.onCardClick(props.card);
  }
  console.log(props)
  return (
      <ul className="places__list" id="places_list" key={props.id}>
          <li className="places__item card">
            <img className="card__image" src={props.link} alt={props.name} onClick={handleClick}/>
            <button
              type="button"
              className="card__delete-photo"
              id="card__delete-photo"
            ></button>
            <div className="card__group">
              <h2 className="card__title" alt={props.name}></h2>
              <div className="card__description">
                <button type="button" className="card__like-button"></button>
                <span className="card__like-count">0</span>
              </div>
            </div>
          </li>
          <li className="places__item card">
            <img className="card__image" src={props.link} alt={props.name} onClick={handleClick}/>
            <div className="card__group">
              <h2 className="card__title" alt={props.name}></h2>
              <div className="card__description">
                <button type="button" className="card__like-button"></button>
                <span className="card__like-count">0</span>
              </div>
            </div>
          </li>
      </ul>
  );
}

export default Card;
