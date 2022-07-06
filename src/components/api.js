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

function checkResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
}

function handleError(err) {
  console.log(err);
}

function getProfileInfo() {
  return fetch(`${config.baseUrl}/users/me`, {
    headers: config.headers
  })
  .then(checkResponse)
}

function getInitialCards(ownerId) {
  return fetch(`${config.baseUrl}/cards`, {
    headers: config.headers
  })
    .then(checkResponse)
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
  .then(checkResponse)
}

function editProfilePic(link, e) {
  return fetch(`${config.baseUrl}/users/me/avatar`, {
    method: 'PATCH',
    headers: config.headers,
    body: JSON.stringify({
      avatar: link
    })
  })
  .then(checkResponse)
}

function addNewCard(cardData, e) {
  return fetch(`${config.baseUrl}/cards`, {
    method: 'POST',
    headers: config.headers,
    body: JSON.stringify(cardData)
  })
  .then(checkResponse)
}

function deleteCard(cardId, target) {
  return fetch(`${config.baseUrl}/cards/${cardId}`, {
    method: 'DELETE',
    headers: config.headers
  })
  .then(checkResponse)
}

function likeCardApi(target) {
  return fetch(`${config.baseUrl}/cards/likes/${target.id}`, {
    method: 'PUT',
    headers: config.headers
  })
  .then(checkResponse)
}

function removeLikeCardApi(target) {
  return fetch(`${config.baseUrl}/cards/likes/${target.id}`, {
    method: 'DELETE',
    headers: config.headers
  })
  .then(checkResponse)
}

export { getInitialCards, getProfileInfo, editProfileInfo, addNewCard, deleteCard, likeCardApi, removeLikeCardApi, editProfilePic, handleError }
