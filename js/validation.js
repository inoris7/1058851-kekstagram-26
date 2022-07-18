//const descriptionField = document.querySelector('.text__description');
const form = document.querySelector('.img-upload__form');

const pristine = new Pristine(form, {
  classTo: 'text__description',
});

form.addEventListener('submit', (evt) => {
  evt.preventDefault();

  const isValid = pristine.validate();
  if (isValid) {
    form.submit();
  }
});
