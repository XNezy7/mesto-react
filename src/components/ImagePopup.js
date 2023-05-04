import React from "react";

function handleClick() {
  props.onCardClick(props.card);
}  

function ImagePopup({onClose, card, isOpened}) {

  const className =`popup popup_opacity ${isOpened ? "popup_active" : ""}`

  return (
    <div className={className}>
    <div className="popup__container">
      <button type="button" className="popup__close" onClick={onClose}></button>
      <img className="popup__image" id="expand_photo" src={card.link} />
      <h2 className="popup__subtitle" id="expand_title"></h2>
    </div>
    </div>
  );
}
