import {createDescription} from './data.js';

//Находим секцию, куда будем вставлять фото пользователей
const userPhotoList = document.querySelector('.pictures');
//находим шаблон для вставки пользовательских фото
const userPhotoTemplate = document.querySelector('#picture').content.querySelector('.picture');
//Генерируем массив пользовательских фото
const userPhotos = createDescription();

const userPhotoListFragment = document.createDocumentFragment();

userPhotos.forEach((photo) => {
  const userPhotoElement = userPhotoTemplate.cloneNode(true);
  userPhotoElement.querySelector('.picture__img').src = photo.url;
  userPhotoElement.querySelector('.picture__likes').textContent = photo.likes;
  userPhotoElement.querySelector('.picture__comments').textContent = photo.comments.length;
  userPhotoListFragment.appendChild(userPhotoElement);
});

userPhotoList.appendChild(userPhotoListFragment);
