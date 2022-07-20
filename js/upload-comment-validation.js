const form = document.querySelector('#upload-select-image');

const pristine = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'text__description--error-text',
  successClass: 'text__description--valid',
  errorClass: 'text__description--valid',
  errorTextTag: 'span',
});

form.addEventListener('submit', (evt) => {
  evt.preventDefault();

  const isValid = pristine.validate();
  if (isValid) {
    form.submit();
  }
});

export {pristine};
