/* eslint-disable react/no-unknown-property */
import React from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Main from "./Main.jsx";
import PopupWithForm from "./PopupWithForm.jsx";


function App() {

  const [isOpenedAvatar, setIsOpenedAvatar] = React.useState(false);
  const [isOpenedEdit, setIsOpenedEdit] = React.useState(false);
  const [isOpenedAdd, setIsOpenedAdd] = React.useState(false);
  const [isOpenedDelete, setIsOpenedDelete] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(false);
  const [cardLike, setCardLike] = React.useState(false);

  function handleCardLike(){
    setCardLike(!cardLike)
  }

  function handleCardClick(){
    setSelectedCard(!selectedCard)
  }

  function handleEditAvatarClick() {
    setIsOpenedAvatar(!isOpenedAvatar)
  }

  function handleEditProfileClick() {
  setIsOpenedEdit(!isOpenedEdit)
  }

  function handleAddPlaceClick() {
    setIsOpenedAdd(!isOpenedAdd)
  }

  function handleCardDelete(){
    setIsOpenedDelete(!isOpenedDelete)
  }
  function closeAllPopups(){
    setIsOpenedAvatar(false)
    setIsOpenedEdit(false)
    setIsOpenedAdd(false)
    setIsOpenedDelete(false)
    setSelectedCard(false)
  }
  
  return (
    <div className="page">
      <Header />
      <Main
       onEditProfile= {handleEditProfileClick}
       onAddPlace = {handleAddPlaceClick}
       onEditAvatar = {handleEditAvatarClick}
       onCardDelete = {handleCardDelete}
       onCardClick = {handleCardClick}
       onClose = {closeAllPopups}
       onCardLike={handleCardLike}
      />
      <Footer />
      <PopupWithForm title="Редактировать профиль" name="profile" isOpened={isOpenedEdit} onClose={closeAllPopups}> 
        <label className="popup__label">
          <input
            id="name"
            className="popup__input"
            type="text"
            name="Name"
            placeholder="Имя"
            minLength="2"
            maxLength="40"
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
            minLength="2"
            maxLength="200"
            required
          />

          <span className="job-error popup__error"></span>
        </label>
        <button type="submit" className="popup__button" id="info-submit" onClick={handleEditProfileClick}>
          Сохранить
        </button>
      </PopupWithForm>
      <PopupWithForm title="Новое место" name="card" isOpened={isOpenedAdd} onClose={closeAllPopups}>
        <label className="popup__label">
          <input
            id="place"
            className="popup__input"
            type="text"
            name="place"
            placeholder="Название места"
            minLength="2"
            maxLength="30"
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
        <button type="submit" className="popup__button" enabled="false" onClick={handleAddPlaceClick}>
          Сохранить
        </button>
      </PopupWithForm>
      <PopupWithForm title="Обновить аватар" name="avatar" isOpened={isOpenedAvatar} onClose={closeAllPopups}>
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
        <button className="popup__button" type="submit" onClick={handleEditAvatarClick}>
          Сохранить
        </button>
      </PopupWithForm>
      <PopupWithForm title="Вы уверены?" name="delete" isOpened={isOpenedDelete} onClose={closeAllPopups}>
        <button className="popup__button" id="delete-button" type="submit">
          Да
        </button>
      </PopupWithForm>
    </div>
  );
}

export default App;
