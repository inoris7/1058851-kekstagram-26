import { openBigPicture } from './big-picture.js';

//Находим секцию, куда будем вставлять фото пользователей
const userPhotoList = document.querySelector('.pictures');
//находим шаблон для вставки пользовательских фото
const userPhotoTemplate = document.querySelector('#picture').content.querySelector('.picture');
//Генерируем массив пользовательских фото

const renderSimilarPhotos = (similarPhotos) => {
  const similarPhotoListFragment = document.createDocumentFragment();

  similarPhotos.forEach((photo) => {
    const similarPhotoElement = userPhotoTemplate.cloneNode(true);
    similarPhotoElement.querySelector('.picture__img').src = photo.url;
    similarPhotoElement.querySelector('.picture__likes').textContent = photo.likes;
    similarPhotoElement.querySelector('.picture__comments').textContent = photo.comments.length;
    similarPhotoListFragment.appendChild(similarPhotoElement);

    similarPhotoElement.addEventListener('click', () => {
      openBigPicture(photo);
    });
  });

  userPhotoList.appendChild(similarPhotoListFragment);
};

export {renderSimilarPhotos};
