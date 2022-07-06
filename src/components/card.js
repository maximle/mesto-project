import { openPopup } from "./modal";
import { ownerId } from "../index";
import { deleteCard, handleError, likeCardApi, removeLikeCardApi } from './api'
const cards = [];

const cardTemplate = document.querySelector('#place-card').content;
// const cardTemplateDeleteBtn = '<button type="button" aria-label="delete" class="place__delete-button"></button>';
const imagePopup = document.querySelector('.image-popup');
const popupImage = document.querySelector('.popup__image');
const popupImageCaption = document.querySelector('.popup__image-caption');

function createCard(cardItem, ownerId) {
  const cardElement = cardTemplate.querySelector('.place').cloneNode(true);
  const placeImage = cardElement.querySelector('.place__image');
  const placeLikeCount = cardElement.querySelector('.place__like-count');
  const cardDeleteBtn = cardElement.querySelector('.place__delete-button');
  cardElement.querySelector('.place__name').textContent = cardItem.name;
  placeImage.alt = cardItem.name;
  placeImage.src = cardItem.link;
  placeLikeCount.textContent = cardItem.likes.length;
  cardElement.id = cardItem._id;
  const placeLikeButton = cardElement.querySelector('.place__like-button');
  if (cardItem.owner._id === ownerId) {
    // cardElement.insertAdjacentHTML('afterbegin', cardTemplateDeleteBtn);
    cardDeleteBtn.addEventListener('click', (e) => {
      console.log(e.target.closest('.place').id);
      deleteCard(e.target.closest('.place').id, e.target)
        .then((deletedCard) => {
          console.log(deletedCard);
          removeCard(e.target);
        })
        .catch(handleError);
    })
  } else {
    cardDeleteBtn.remove();
  }
  if (cardItem.likes.find(item => {
    if (item._id === ownerId) {
      return true
    }
  })) {
      addLike(placeLikeButton);
  }
  placeLikeButton.addEventListener('click', (e) => {
    const target = e.target.closest('.place');
    if (!placeLikeButton.classList.contains('place__like-button_active')) {
      likeCardApi(target)
        .then((likedCard) => {
          console.log(likedCard);
          target.querySelector('.place__like-count').textContent = likedCard.likes.length;
          addLike(placeLikeButton);
        })
        .catch(handleError);
    } else {
      removeLikeCardApi(target)
        .then((likedCard) => {
          console.log(likedCard);
          target.querySelector('.place__like-count').textContent = likedCard.likes.length;
          removeLike(placeLikeButton);
        })
        .catch(handleError);
    }
  })
  placeImage.addEventListener('click', () => {
    popupImage.src = cardItem.link;
    popupImage.alt = cardItem.name;
    popupImageCaption.textContent = cardItem.name;
    openPopup(imagePopup);
  })
  return cardElement
};

// 6. Удаление карточки
function removeCard(cardDelBtn) {
  cardDelBtn.closest('.place').remove();
}

// 5. Лайк карточки
function removeLike(cardLikeBtn) {
  cardLikeBtn.classList.remove('place__like-button_active');
}

function addLike(cardLikeBtn) {
  cardLikeBtn.classList.add('place__like-button_active');
}


export {cards, createCard, removeCard};
