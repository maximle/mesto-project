import './pages/index.css';
import { profileEditBtn, placesList, profileName, profileCalling, profilePic, profilePicOverlay } from './components/utils';

import { profilePopup, popupNameInput, popupCallingInput, openPopup, closePopup, closePopupByEsc, handleProfileFormSubmit, cardPopup, profileAddBtn, popupCardForm, handleCardFormSubmit, profilePicPopup, handleProfilePicFormSubmit} from './components/modal.js';

import {cards, createCard, removeCard} from './components/card.js';
import {} from './components/validate'
import { getInitialCards, getProfileInfo, handleError } from './components/api'
// 1. Работа модальных окон

profileEditBtn.addEventListener('click', () => {
  popupNameInput.value = profileName.textContent;
  popupCallingInput.value = profileCalling.textContent;
  openPopup(profilePopup);
});

profilePicOverlay.addEventListener('click', () => {
  openPopup(profilePicPopup);
});


// const myOwnerId  = await getProfileInfo()
//   .then((profileInfoArr) => {
//     profileName.textContent = profileInfoArr.name;
//     profileCalling.textContent = profileInfoArr.about;
//     profilePic.src = profileInfoArr.avatar;
//     return profileInfoArr._id;
//   })
//   .catch(handleError)

Promise.all([getProfileInfo(), getInitialCards()])
  .then (res => {
    console.log(res);
    profileName.textContent = res[0].name;
    profileCalling.textContent = res[0].about;
    profilePic.src = res[0].avatar;
    const myOwnerId = res[0]._id;
    res[1].forEach(cardsItem => {
      cards.push(cardsItem);
    })
    console.log(cards);

    for (let i = 0; i < cards.length; i++) {
      const cardElement = createCard(cards[i], myOwnerId);
      placesList.append(cardElement);
    }
  })




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

const profilePicPopupForm = document.querySelector('.profile-pic-popup .popup__form');
profilePicPopupForm.addEventListener('submit', handleProfilePicFormSubmit);
// Добавление карточек

// getInitialCards(myOwnerId)
//   .then((cardsArr) => {
//     cardsArr.forEach(cardsItem => {
//       cards.push(cardsItem);
//     })
//     console.log(cards);

//     for (let i = 0; i < cards.length; i++) {
//       const cardElement = createCard(cards[i], myOwnerId);
//       placesList.append(cardElement);
//     }
//   })
//   .catch(handleError);



profileAddBtn.addEventListener('click', () => {
  openPopup(cardPopup);
});


popupCardForm.addEventListener('submit', handleCardFormSubmit);

export { profilePicPopupForm }



