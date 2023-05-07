import React from "react";

function ImagePopup(props) {
  const className = `popup popup_opacity ${props.isOpened ? "popup_active" : ""}`
  return (
    <div className = {className}>
    <div className = "popup__container">
      <button type = "button" className = "popup__close" onClick = {props.onClose} ></button>
      <img className = "popup__image" id = "expand_photo" src = {props.card.link} alt = {props.card.name} />
      <h2 className = "popup__subtitle" id = "expand_title"> {props.card.name} </h2>
    </div>
    </div>
  );
}

export default ImagePopup;