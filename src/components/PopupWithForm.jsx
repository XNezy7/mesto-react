import React from "react";

function PopupWithForm({ name, title, children, isOpened, onClose }) {

  const className = `popup ${isOpened ? "popup_active" : ""}`;

  return (
    <div className={className}>
      <form
        action="#"
        className={`popup__form popup__form_${name}`}
        name="form"
        noValidate
      >
        <div className="popup__body">
          <button
            type="button"
            className="popup__close"
            id="popup_close"
            onClick={onClose}
          ></button>
          <h3 className="popup__title">{`${title}`}</h3>
          {children}
        </div>
      </form>
    </div>
  );
}

export default PopupWithForm;
