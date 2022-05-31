// 1. Работа модальных окон

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

profileEditBtn.addEventListener('click', () => {
  popupNameInput.value = profileName.textContent;
  popupCallingInput.value = profileCalling.textContent;
  openPopup(profilePopup);
});

function closePopup(closingPopup) {
  closingPopup.classList.remove('popup_opened');
};

const popupCloseButtons = document.querySelectorAll('.popup__close-button');

popupCloseButtons.forEach((button) => {
  const popup = button.closest('.popup');
  button.addEventListener('click', () => closePopup(popup));
});

const profilePopupForm = document.querySelector('.popup__form');

function handleProfileFormSubmit (e) {
  e.preventDefault();
  profileName.textContent = popupNameInput.value;
  profileCalling.textContent = popupCallingInput.value;
  closePopup(profilePopup);
}

profilePopupForm.addEventListener('submit', handleProfileFormSubmit);

// 2. Шесть карточек «из коробки»
// 3. Форма добавления карточки
// 4. Добавление карточки

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
  console.log();
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

// 4. Добавление карточки

for (let i = 0; i < initialCards.length; i++) {
  const cardElement = createCard(initialCards[i]);
  placesList.append(cardElement);
}

const cardPopup = document.querySelector('.card-popup');
const profileAddBtn = document.querySelector('.profile__add-button');
profileAddBtn.addEventListener('click', () => {
  openPopup(cardPopup);
});

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
  e.target.reset();
}

popupCardForm.addEventListener('submit', handleCardFormSubmit);







