const plusButton = document.querySelector('.scale__control--bigger');
const minusButton = document.querySelector('.scale__control--smaller');
const scaleResult = document.querySelector('.scale__control--value');
const imgPreview = document.querySelector('.img-upload__preview img');

let procentNumber = 100;

const scaleAdjust = function () {
  scaleResult.value = `${procentNumber}%`;

  plusButton.addEventListener('click', () => {
    if (procentNumber < 100) {
      procentNumber += 25;
      scaleResult.value = `${procentNumber}%`;
      const picScale = `scale(${procentNumber / 100})`;
      imgPreview.style.transform = picScale;
    }
  });

  minusButton.addEventListener('click', () => {
    if (procentNumber > 25) {
      procentNumber -= 25;
      scaleResult.value = `${procentNumber}%`;
      const picScale = `scale(${procentNumber / 100})`;
      imgPreview.style.transform = picScale;
    }
  });
};

scaleAdjust();
