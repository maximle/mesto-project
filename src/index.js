import './pages/index.css';
import { profileEditBtn, profileName, profileCalling } from './components/utils';

import { profilePopup, popupNameInput, popupCallingInput, openPopup, closePopup, closePopupByEsc, handleProfileFormSubmit, cardPopup, profileAddBtn, popupCardForm, handleCardFormSubmit} from './components/modal.js';

import {cards, placesList, createCard} from './components/card.js';
import {} from './components/validate'
import { getInitialCards, getProfileInfo } from './components/api'
// 1. Работа модальных окон

profileEditBtn.addEventListener('click', () => {
  popupNameInput.value = profileName.textContent;
  popupCallingInput.value = profileCalling.textContent;
  openPopup(profilePopup);
});
getProfileInfo();
// const popupCloseButtons = document.querySelectorAll('.popup__close-button');


// popupCloseButtons.forEach((button) => {
//   const popup = button.closest('.popup');
//   button.addEventListener('click', () => closePopup(popup));

//   popup.addEventListener('click', (e) => {
//     if (e.target.classList.contains('popup_opened')) {
//       closePopup(popup);
//     }
//   })
// });

const popups = document.querySelectorAll('.popup')

popups.forEach((popup) => {
    popup.addEventListener('mousedown', (evt) => {
        if (evt.target.classList.contains('popup_opened')) {
            closePopup(popup)
        }
        if (evt.target.classList.contains('popup__close-button')) {
          closePopup(popup)
        }
    })
})


const profilePopupForm = document.querySelector('.popup__form');
profilePopupForm.addEventListener('submit', handleProfileFormSubmit);


// 4. Добавление карточки
getInitialCards();
// for (let i = 0; i < cards.length; i++) {
//   console.log(cards.length);
//   const cardElement = createCard(cards[i]);
//   placesList.append(cardElement);
// }


profileAddBtn.addEventListener('click', () => {
  openPopup(cardPopup);
});


popupCardForm.addEventListener('submit', handleCardFormSubmit);





