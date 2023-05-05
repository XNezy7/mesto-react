import React from "react";
import PropTypes from 'prop-types';

function ImagePopup(props) {
  const className =`popup popup_opacity ${props.isOpened ? "popup_active" : ""}`

  return (
    <div className={className}>
    <div className="popup__container">
      <button type="button" className="popup__close" onClick={props.onClose}></button>
      <img className="popup__image" id="expand_photo" src={props.link} />
      <h2 className="popup__subtitle" id="expand_title">{props.name}</h2>
    </div>
    </div>
  );

  ImagePopup.propTypes = {
    name: PropTypes.string.isRequired,
    isOpened: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    onClose: PropTypes.string.isRequired,
  };
}

export default ImagePopup;