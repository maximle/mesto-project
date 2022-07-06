import './pages/index.css';
import { profileEditBtn, placesList, profileName, profileCalling, profilePic, profilePicOverlay } from './components/utils';

import { profilePopup, popupNameInput, popupCallingInput, openPopup, closePopup, closePopupByEsc, handleProfileFormSubmit, cardPopup, profileAddBtn, popupCardForm, handleCardFormSubmit, profilePicPopup, profilePicPopupForm, handleProfilePicFormSubmit} from './components/modal.js';

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

Promise.all([getProfileInfo(), getInitialCards()])
  .then (([profileInfo, cardsArr]) => {
    console.log(profileInfo, cardsArr)
    profileName.textContent = profileInfo.name;
    profileCalling.textContent = profileInfo.about;
    profilePic.src = profileInfo.avatar;
    const myOwnerId = profileInfo._id;

    for (let i = 0; i < cardsArr.length; i++) {
      const cardElement = createCard(cardsArr[i], myOwnerId);
      placesList.append(cardElement);
    }
  })
  .catch(handleError);

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

profilePicPopupForm.addEventListener('submit', handleProfilePicFormSubmit);




profileAddBtn.addEventListener('click', () => {
  openPopup(cardPopup);
});


popupCardForm.addEventListener('submit', handleCardFormSubmit);

export { profilePicPopupForm }





// const myOwnerId  = await getProfileInfo()
//   .then((profileInfoArr) => {
//     profileName.textContent = profileInfoArr.name;
//     profileCalling.textContent = profileInfoArr.about;
//     profilePic.src = profileInfoArr.avatar;
//     return profileInfoArr._id;
//   })
//   .catch(handleError)

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
