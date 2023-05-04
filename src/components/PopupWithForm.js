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

{
  /* <section className="popup" id="profile_popup">
        <form
          action="#"
          className="popup__form popup__form_profile"
          name="form"
          novalidate
        >
          <div className="popup__body">
            <button
              type="button"
              className="popup__close"
              id="popup_close"
            ></button>
            <h3 className="popup__title">Редактировать профиль</h3>
            <label className="popup__label">
              <input
                id="name"
                className="popup__input"
                type="text"
                name="Name"
                placeholder="Имя"
                minlength="2"
                maxlength="40"
                required
              />
              <span className="name-error popup__error"></span>
            </label>
            <label className="popup__label">
              <input
                id="job"
                className="popup__input"
                type="text"
                name="Work"
                placeholder="Вид деятельности"
                minlength="2"
                maxlength="200"
                required
              />
              <span className="job-error popup__error"></span>
            </label>
            <button type="submit" className="popup__button" id="info-submit">
              Сохранить
            </button>
          </div>
        </form>
      </section>
      <section className="popup" id="card_popup">
        <form
          action="#"
          className="popup__form popup__form_card"
          name="form"
          novalidate
        >
          <div className="popup__body">
            <button
              type="button"
              id="close_card-button"
              className="popup__close"
            ></button>
            <h3 className="popup__title">Новое место</h3>
            <label className="popup__label">
              <input
                id="place"
                className="popup__input"
                type="text"
                name="place"
                placeholder="Название места"
                minlength="2"
                maxlength="30"
                required
              />
              <span className="place-error popup__error"></span>
            </label>
            <label className="popup__label">
              <input
                id="photo-avatar"
                className="popup__input"
                type="url"
                name="photo"
                placeholder="Ссылка"
                required
              />
              <span className="photo-avatar-error popup__error"></span>
            </label>
            <button type="submit" className="popup__button" enabled="false">
              Сохранить
            </button>
          </div>
        </form>
      </section>
      <section className="popup popup_opacity" id="photo_popup">
        <div className="popup__container">
          <button type="button" className="popup__close"></button>
          <img className="popup__image" id="expand_photo" />
          <h2 className="popup__subtitle" id="expand_title"></h2>
        </div>
      </section>
      <section className="popup" id="popup_delete">
        <form className="popup__delete-body" id="popup_delete-body">
          <button type="button" className="popup__close"></button>
          <h2 className="popup__title popup__title-fix">Вы уверены?</h2>
          <button className="popup__button" id="delete-button" type="submit">
            Да
          </button>
        </form>
      </section>
      <section className="popup" id="popup_avatar">
        <form
          action="#"
          className="popup__form popup__form_avatar"
          name="form"
          novalidate
        >
          <div className="popup__body-avatar">
            <button type="button" className="popup__close"></button>
            <h2 className="popup__title">Обновить аватар</h2>
            <label className="popup__label">
              <input
                id="photo"
                className="popup__input"
                type="url"
                name="inputAvatarUrl"
                placeholder="Ссылка"
                required
              />
              <span className="photo-error popup__error"></span>
            </label>
            <button className="popup__button" type="submit">
              Сохранить
            </button>
          </div>
        </form>
      </section> */
}
