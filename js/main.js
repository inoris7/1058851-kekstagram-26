import './render-pictures.js';
import './upload-form.js';
import './form-validation.js';
import './scale-upload-preview.js';
import './img-preview-effects.js';
import {renderSimilarPhotos} from './render-pictures.js';
import {closeUploadForm} from './upload-form.js';
import {setUploadFormSubmit} from './form-validation.js';

fetch ('https://26.javascript.pages.academy/kekstagram/data')
  .then((response) => response.json())
  .then((userPhotos) => {
    renderSimilarPhotos(userPhotos);
  });

setUploadFormSubmit(closeUploadForm);
