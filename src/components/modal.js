import { placesList, createCard } from "./card";

const profileEditBtn = document.querySelector('.profile__edit-button');
const profileCloseBtn = document.querySelector('.popup__close-button');
const profilePopup = document.querySelector('.profile-popup');
const profileName = document.querySelector('.profile__name');
const profileCalling = document.querySelector('.profile__calling');
const popupNameInput = document.querySelector('.popup__input_type_name');
const popupCallingInput = document.querySelector('.popup__input_type_calling');


function openPopup(popup) {
  popup.classList.add('popup_opened');
};

function closePopup(closingPopup) {
  closingPopup.classList.remove('popup_opened');
};

function closePopupByEsc(e) {
  const popup = document.querySelector('.popup_opened');
  if (e.key === "Escape" && popup.classList.contains('popup_opened')) {
    closePopup(popup);
  }
  document.removeEventListener('click', closePopupByEsc);
}

function handleProfileFormSubmit (e) {
  e.preventDefault();
  profileName.textContent = popupNameInput.value;
  profileCalling.textContent = popupCallingInput.value;
  closePopup(profilePopup);
}

const cardPopup = document.querySelector('.card-popup');
const profileAddBtn = document.querySelector('.profile__add-button');


const popupCardForm = document.querySelector('.card-popup .popup__form');
const cardPopupNameInput = document.querySelector('.card-popup .popup__input_type_name');
const cardPopupLinkInput = document.querySelector('.card-popup .popup__input_type_calling');

function handleCardFormSubmit (e) {
  e.preventDefault();
  const cardPopupInput = {
    name: cardPopupNameInput.value,
    link: cardPopupLinkInput.value
  };
  placesList.prepend(createCard(cardPopupInput));
  closePopup(cardPopup);
  if (e.target.classList.contains('popup__input')) {
    e.target.closest('.popup__form').reset();
  } else {
    e.target.reset();
  }

}


export {profileEditBtn, profilePopup, profileName, profileCalling, popupNameInput, popupCallingInput, openPopup, closePopup, closePopupByEsc, handleProfileFormSubmit, cardPopup, profileAddBtn, popupCardForm, handleCardFormSubmit};
