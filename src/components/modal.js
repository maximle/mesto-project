import { createCard } from "./card";
import { validationConfig } from './validate.js';
import { profileEditBtn, profileName, profileCalling, profilePic, placesList } from './utils';
import { editProfileInfo, addNewCard, editProfilePic, handleError } from './api'
import { profilePicPopupForm } from '../index'

const profilePopup = document.querySelector('.profile-popup');
const popupNameInput = document.querySelector('.popup__input_type_name');
const popupCallingInput = document.querySelector('.popup__input_type_calling');
const cardPopupSaveBtn = document.querySelector('.card-popup').querySelector('.popup__save-button');
const profilePicPopup = document.querySelector('.profile-pic-popup');

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

function renderSaving(isSaving, e) {
  const saveButton = e.target.querySelector('.popup__save-button');
  if(isSaving) {
    saveButton.textContent = 'Сохранение...';
  } else {
    saveButton.textContent = 'Сохранить'
  }
}

function handleProfileFormSubmit (e) {
  e.preventDefault();
  renderSaving(true, e);
  console.log(e.target);
  editProfileInfo(popupNameInput.value, popupCallingInput.value, e)
    .then((profileInfoArr) => {
      console.log(profileInfoArr);
      profileName.textContent = profileInfoArr.name;
      profileCalling.textContent = profileInfoArr.about;
      profilePic.src = profileInfoArr.avatar;
      closePopup(profilePopup);
    })
    .catch(handleError)
    .finally (() => {
      renderSaving(false, e);
    });
}


const profilePicPopupLinkInput = document.querySelector('.profile-pic-popup .popup__input_type_calling');

function handleProfilePicFormSubmit (e) {
  e.preventDefault();
  renderSaving(true, e);
  editProfilePic(profilePicPopupLinkInput.value, e)
    .then((profilePicAnswer) => {
      console.log(profilePicAnswer);
      profilePic.src = profilePicAnswer.avatar;
      closePopup(profilePicPopup);
      profilePicPopupForm.reset();
    })
    .catch(handleError)
    .finally (() => {
      renderSaving(false, e);
    });
}

const cardPopup = document.querySelector('.card-popup');
const profileAddBtn = document.querySelector('.profile__add-button');


const popupCardForm = document.querySelector('.card-popup .popup__form');
const cardPopupNameInput = document.querySelector('.card-popup .popup__input_type_name');
const cardPopupLinkInput = document.querySelector('.card-popup .popup__input_type_calling');

function handleCardFormSubmit (e) {
  e.preventDefault();
  renderSaving(true, e);
  const cardPopupInput = {
    name: cardPopupNameInput.value,
    link: cardPopupLinkInput.value
  };
  console.log(cardPopupInput);
  addNewCard(cardPopupInput, e)
    .then((newCardObj) => {
      console.log(newCardObj);
      placesList.prepend(createCard(newCardObj, newCardObj.owner._id));
      closePopup(cardPopup);
      if (e.target.classList.contains('popup__input')) {
        e.target.closest('.popup__form').reset();
      } else {
        e.target.reset();
      }
      cardPopupSaveBtn.disabled = true;
      cardPopupSaveBtn.classList.add(validationConfig.disabledButtonClass);
    })
    .catch(handleError)
    .finally (() => {
      renderSaving(false, e);
    });

}


export { profilePopup, profilePicPopup, popupNameInput, popupCallingInput, openPopup, closePopup, closePopupByEsc, handleProfileFormSubmit, cardPopup, profileAddBtn, popupCardForm, handleCardFormSubmit, handleProfilePicFormSubmit, renderSaving};
