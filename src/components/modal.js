import { placesList, createCard } from "./card";
import { validationConfig } from './validate.js';
import { profileEditBtn, profileName, profileCalling } from './utils';
import { editProfileInfo, addNewCard } from './api'


const profilePopup = document.querySelector('.profile-popup');
const popupNameInput = document.querySelector('.popup__input_type_name');
const popupCallingInput = document.querySelector('.popup__input_type_calling');
const cardPopupSaveBtn = document.querySelector('.card-popup').querySelector('.popup__save-button');

function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupByEsc);
};

function closePopup(closingPopup) {
  closingPopup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupByEsc);
};

function closePopupByEsc(e) {
  if (e.key === "Escape") {
    const popup = document.querySelector('.popup_opened');
    closePopup(popup);
  }
}

function handleProfileFormSubmit (e) {
  e.preventDefault();
  // profileName.textContent = popupNameInput.value;
  // profileCalling.textContent = popupCallingInput.value;
  editProfileInfo(popupNameInput.value, popupCallingInput.value);
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
  // placesList.prepend(createCard(cardPopupInput));
  console.log(cardPopupInput);
  addNewCard(cardPopupInput);
  closePopup(cardPopup);
  if (e.target.classList.contains('popup__input')) {
    e.target.closest('.popup__form').reset();
  } else {
    e.target.reset();
  }
  cardPopupSaveBtn.disabled = true;
  cardPopupSaveBtn.classList.add(validationConfig.disabledButtonClass);
}


export { profilePopup, popupNameInput, popupCallingInput, openPopup, closePopup, closePopupByEsc, handleProfileFormSubmit, cardPopup, profileAddBtn, popupCardForm, handleCardFormSubmit};
