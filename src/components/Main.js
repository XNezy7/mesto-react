import React from "react";
import PopupWithForm from "./PopupWithForm.js";
import App from "./App.js";
import Api from "../utils/Api.js";
import { api } from "../utils/Api.js";
import Card from "./Card.js";

function Main({ onEditAvatar, onEditProfile, onAddPlace, onCardDelete, onCardLike, onCardClick }) {
  const [userDescription, setUserDescription] = React.useState();
  const [userName, setUserName] = React.useState();
  const [userAvatar, setUserAvatar] = React.useState();
  const [cards, setCards] = React.useState([]);
  function getInfo() {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
      .then(([userInfo, newCardData]) => {
        setUserDescription(userInfo.about);
        setUserName(userInfo.name);
        setUserAvatar(userInfo.avatar);
        setCards(newCardData);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  // function addCard(){
  //   api.getInitialCards().then((newCardData) => {
  //     setCards(...cards, newCardData)
  //   })
  // }
  React.useEffect(() => {
    getInfo();
  }, []);

  const createCard = cards.map((element) => {
    console.log(element)
    return (
      <Card
        // key={element._id}
        card={element}
        // onCardClick={onCardClick}
        // onCardLike={onCardLike}
        // onCardDelete={onCardDelete}
      />
    );
  });
  return (
    <main>
      <section className="profile">
        <div className="profile__avatar-outside">
          <button
            className="profile__avatar-button"
            type="button"
            alt="Изменить аватар"
            onClick={onEditAvatar}
          >
            <img className="profile__avatar" src={userAvatar} alt="аватар" />
          </button>
        </div>
        <div className="profile__grid">
          <h1 className="profile__title" id="profile_title">
            {userName}
          </h1>
          <button
            type="button"
            className="profile__edit"
            id="profile_edit"
            onClick={onEditProfile}
          ></button>
          <p className="profile__subtitle" id="profile_subtitle">
            {userDescription}
          </p>
        </div>
        <button
          type="button"
          className="profile__add"
          id="open_pop_up"
          onClick={onAddPlace}
        ></button>
      </section>
    </main>
  );
}

export default Main;
