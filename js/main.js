/* eslint-disable no-console */
//Функкция выдачи случайного числа из заданного диапазона, включая начальное и конечное значение
function getRandomNumber (startOfRange, endOfRange) {

  //Проверка границ диапазона на то, что они не отрицательные и начало больше конца
  if(startOfRange < 0 || endOfRange < 0 || startOfRange >= endOfRange) {
    return console.log('Неверные значения границ диапазона, введите заново');
  }

  startOfRange = Math.ceil(startOfRange);
  endOfRange = Math.floor(endOfRange);
  return Math.floor(Math.random() * (endOfRange - startOfRange + 1)) + startOfRange;
}

getRandomNumber(1,8);

//Функция сравнения длины строки
function compareStringLenght (text, symbolQuantity) {

  if(text.lenght <= symbolQuantity) {
    return true;
  }

  return false;
}

compareStringLenght ('dasdja', 8);
