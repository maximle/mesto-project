import { openPopup } from "./modal";

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const cardTemplate = document.querySelector('#place-card').content;
const placesList = document.querySelector('.places__list');

const imagePopup = document.querySelector('.image-popup');
const popupImage = document.querySelector('.popup__image');
const popupImageCaption = document.querySelector('.popup__image-caption');

function createCard(cardItem) {
  const cardElement = cardTemplate.querySelector('.place').cloneNode(true);
  const placeImage = cardElement.querySelector('.place__image');
  cardElement.querySelector('.place__name').textContent = cardItem.name;
  placeImage.alt = cardItem.name;
  placeImage.src = cardItem.link;
  cardElement.querySelector('.place__delete-button').addEventListener('click', (e) => {
    removeCard(e.target);
  });
  cardElement.querySelector('.place__like-button').addEventListener('click', (e) => {
    likeCard(e.target);
  });
  placeImage.addEventListener('click', () => {
    popupImage.src = cardItem.link;
    popupImage.alt = cardItem.name;
    popupImageCaption.textContent = cardItem.name;
    openPopup(imagePopup);
  });
  return cardElement
};

// 6. Удаление карточки
function removeCard(cardDelBtn) {
  cardDelBtn.closest('.place').remove();
};

// 5. Лайк карточки
function likeCard(cardLikeBtn) {
  cardLikeBtn.classList.toggle('place__like-button_active');
};


export {initialCards, placesList, createCard};
