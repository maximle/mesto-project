// import { cards } from './card'
import {cards, createCard, removeCard} from './card';
import { profileEditBtn, profileName, profileCalling, profilePic, placesList } from './utils';
import { renderSaving } from './modal';

const config = {
  baseUrl: 'https://nomoreparties.co/v1/plus-cohort-13',
  headers: {
    authorization: '84bc1fff-03b1-47e2-8e8e-0c12cf25f1f3',
    'Content-Type': 'application/json'
  }
}


function getProfileInfo() {
  return fetch(`${config.baseUrl}/users/me`, {
    headers: config.headers
  })
  .then(res => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  })
  .then((profileInfoArr) => {
    profileName.textContent = profileInfoArr.name;
    profileCalling.textContent = profileInfoArr.about;
    profilePic.src = profileInfoArr.avatar;
    return profileInfoArr._id;
  })
  .catch((err) => {
    console.log(err);
  })
}

function getInitialCards(ownerId) {
  return fetch(`${config.baseUrl}/cards`, {
    headers: config.headers
  })
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    })
    .then((cardsArr) => {
      cardsArr.forEach(cardsItem => {
        // cards.push({
        //   name: cardsItem.name,
        //   link: cardsItem.link,
        //   likes: cardsItem.likes.length,
        //   ownerId: cardsItem.owner._id
        // })
        cards.push(cardsItem);

        // console.log(cards.find(item => {
        //   if (item.owner._id === ownerId) {
        //     return true
        //   }
        // }));

      })
      console.log(cards);

      for (let i = 0; i < cards.length; i++) {
        const cardElement = createCard(cards[i], ownerId);
        placesList.append(cardElement);
      }
    })
    .catch((err) => {
      console.log(err);
    })
}



function editProfileInfo(nameInput, callingInput, e) {
  return fetch(`${config.baseUrl}/users/me`, {
    method: 'PATCH',
    headers: config.headers,
    body: JSON.stringify({
      name: nameInput,
      about: callingInput
    })
  })
  .then(res => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  })
  .then((profileInfoArr) => {
    console.log(profileInfoArr);
    profileName.textContent = profileInfoArr.name;
    profileCalling.textContent = profileInfoArr.about;
    profilePic.src = profileInfoArr.avatar;
  })
  .catch((err) => {
    console.log(err);
  })
  .finally (() => {
    renderSaving(false, e);
  });
}

function editProfilePic(link, e) {
  return fetch(`${config.baseUrl}/users/me/avatar`, {
    method: 'PATCH',
    headers: config.headers,
    body: JSON.stringify({
      avatar: link
    })
  })
  .then(res => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  })
  .then((profilePicAnswer) => {
    console.log(profilePicAnswer);
    profilePic.src = profilePicAnswer.avatar;
  })
  .catch((err) => {
    console.log(err);
  })
  .finally (() => {
    renderSaving(false, e);
  });
}

function addNewCard(cardData, e) {
  return fetch(`${config.baseUrl}/cards`, {
    method: 'POST',
    headers: config.headers,
    body: JSON.stringify(cardData)
  })
  .then(res => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  })
  .then((newCardObj) => {
    console.log(newCardObj);
    placesList.prepend(createCard(newCardObj, newCardObj.owner._id));
  })
  .catch((err) => {
    console.log(err);
  })
  .finally (() => {
    renderSaving(false, e);
  });
}

function deleteCard(cardId, target) {
  return fetch(`${config.baseUrl}/cards/${cardId}`, {
    method: 'DELETE',
    headers: config.headers
  })
  .then(res => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  })
  .then((deletedCard) => {
    console.log(deletedCard);
    removeCard(target);
  })
  .catch((err) => {
    console.log(err);
  })
}

function likeCardApi(target) {
  return fetch(`${config.baseUrl}/cards/likes/${target.id}`, {
    method: 'PUT',
    headers: config.headers
  })
  .then(res => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  })
  .then((likedCard) => {
    console.log(likedCard);
    target.querySelector('.place__like-count').textContent = likedCard.likes.length;
  })
  .catch((err) => {
    console.log(err);
  })
}

function removeLikeCardApi(target) {
  return fetch(`${config.baseUrl}/cards/likes/${target.id}`, {
    method: 'DELETE',
    headers: config.headers
  })
  .then(res => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  })
  .then((likedCard) => {
    console.log(likedCard);
    target.querySelector('.place__like-count').textContent = likedCard.likes.length;
  })
  .catch((err) => {
    console.log(err);
  })
}

export { getInitialCards, getProfileInfo, editProfileInfo, addNewCard, deleteCard, likeCardApi, removeLikeCardApi, editProfilePic }
