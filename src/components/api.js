// import { cards } from './card'
import {cards, createCard} from './card';
import { profileEditBtn, profileName, profileCalling, profilePic, placesList } from './utils';


const config = {
  baseUrl: 'https://nomoreparties.co/v1/plus-cohort-13',
  headers: {
    authorization: '84bc1fff-03b1-47e2-8e8e-0c12cf25f1f3',
    'Content-Type': 'application/json'
  }
}

function getInitialCards() {
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
        cards.push({
          name: cardsItem.name,
          link: cardsItem.link
        })
      })
      console.log(cards);

      for (let i = 0; i < cards.length; i++) {
        const cardElement = createCard(cards[i]);
        placesList.append(cardElement);
      }
    })
    .catch((err) => {
      console.log(err);
    })
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
    console.log(profileInfoArr);
    profileName.textContent = profileInfoArr.name;
    profileCalling.textContent = profileInfoArr.about;
    profilePic.src = profileInfoArr.avatar;
  })
  .catch((err) => {
    console.log(err);
  })
}

function editProfileInfo(nameInput, callingInput) {
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
}

function addNewCard(cardData) {
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
    const cardPopupInput = {
      name: newCardObj.name,
      link: newCardObj.link
    };
    placesList.prepend(createCard(cardPopupInput));
  })
  .catch((err) => {
    console.log(err);
  })
}

export { getInitialCards, getProfileInfo, editProfileInfo, addNewCard }
