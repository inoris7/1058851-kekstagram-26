import {pristine} from './upload-comment-validation.js';

const form = document.querySelector('.img-upload__form');
const hashtagField = form.querySelector('.text__hashtags');
const re = /^#[A-Za-zА-Яа-яЁё0-9]{1,19}$/;
const re2 = /^$/;

pristine.addValidator(hashtagField, (value) => {
  const arrayOfHashtags = value.split(' ');
  for (let i = 0; i < arrayOfHashtags.length; i++) {
    if (!re.test(arrayOfHashtags[i]) && !re2.test(arrayOfHashtags[i])) {
      return false;
    }
    return true;
  }
}, 'Неверный хештег');

pristine.addValidator(hashtagField, (value) => {
  const arrayOfHashtags = value.split(' ');
  if (arrayOfHashtags.length <= 5) {
    return true;
  }
  return false;
}, 'Не более пяти хештегов');

form.addEventListener('submit', (evt) => {
  evt.preventDefault();

  const isValid = pristine.validate();
  if (isValid) {
    form.submit();
  }
});
