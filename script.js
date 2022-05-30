// 1. Работа модальных окон

const profileEditBtn = document.querySelector('.profile__edit-button');
const popupCloseBtn = document.querySelector('.popup__close-button');
const popup = document.querySelector('.popup');
const profileName = document.querySelector('.profile__name');
const profileCalling = document.querySelector('.profile__calling');
const popupNameInput = document.querySelector('.popup__input_type_name');
const popupCallingInput = document.querySelector('.popup__input_type_calling');

profileEditBtn.addEventListener('click', () => {
  popupNameInput.value = profileName.textContent;
  popupCallingInput.value = profileCalling.textContent;
  popup.classList.toggle('popup_opened');
});

function closePopup() {
  popup.classList.toggle('popup_opened');
}
popupCloseBtn.addEventListener('click', closePopup);

const popupForm = document.querySelector('.popup__form');

function formSubmitHandler (evt) {
  evt.preventDefault();
  profileName.textContent = popupNameInput.value;
  profileCalling.textContent = popupCallingInput.value;
  popupNameInput.value = '';
  popupCallingInput.value = '';
  closePopup();
}

popupForm.addEventListener('submit', formSubmitHandler);

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

for (let i = 0; i < initialCards.length; i++) {
  const cardElement = cardTemplate.querySelector('.place').cloneNode(true);
  cardElement.querySelector('.place__name').textContent = initialCards[i].name;
  cardElement.querySelector('.place__image').src = initialCards[i].link;
  placesList.append(cardElement);
}

const cardPopup = document.querySelector('#card-popup');
const profileAddBtn = document.querySelector('.profile__add-button');

profileAddBtn.addEventListener('click', () => {
  cardPopup.classList.toggle('popup_opened');
});

cardPopup.querySelector('.popup__close-button').addEventListener('click', () => {
  cardPopup.classList.toggle('popup_opened');
});

const popupCardForm = document.querySelector('#card-popup .popup__form');
const cardPopupNameInput = document.querySelector('#card-popup .popup__input_type_name');
const cardPopupLinkInput = document.querySelector('#card-popup .popup__input_type_calling');

function cardFormSubmitHandler (evt) {
  evt.preventDefault();
  console.log('asd');
  const cardElement = cardTemplate.querySelector('.place').cloneNode(true);
  cardElement.querySelector('.place__name').textContent = cardPopupNameInput.value;
  cardElement.querySelector('.place__image').src = cardPopupLinkInput.value;
  placesList.prepend(cardElement);
  cardPopup.classList.toggle('popup_opened');
}

popupCardForm.addEventListener('submit', cardFormSubmitHandler);

// 5. Лайк карточки
// 6. Удаление карточки
// 7. Открытие попапа с картинкой
const imagePopup = document.querySelector('#image-popup');

placesList.addEventListener('click', function(e) {
  const eventTarget = e.target;
  if (eventTarget.classList.contains('place__like-button')) {
    eventTarget.classList.toggle('place__like-button_active');
  } else if (eventTarget.classList.contains('place__delete-button')) {
    eventTarget.closest('.place').remove();
  } else if (eventTarget.classList.contains('place__image')) {
    imagePopup.classList.toggle('popup_opened');
    imagePopup.querySelector('.popup__image').src = eventTarget.src;
    imagePopup.querySelector('.popup__image-caption').textContent = eventTarget.parentElement.querySelector('.place__name').textContent;
  }
});

imagePopup.querySelector('.popup__close-button').addEventListener('click', () => {
  imagePopup.classList.toggle('popup_opened');
});
