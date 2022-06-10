/* eslint-disable no-console */
//Функкция выдачи случайного числа из заданного диапазона, включая начальное и конечное значение
const getRandomNumber = (startOfRange, endOfRange) => {

  //Проверка границ диапазона на то, что они не отрицательные и начало больше конца
  if(startOfRange < 0 || endOfRange < 0 || startOfRange >= endOfRange) {
    return console.log('Неверные значения границ диапазона, введите заново');
  }

  startOfRange = Math.ceil(startOfRange);
  endOfRange = Math.floor(endOfRange);
  return Math.floor(Math.random() * (endOfRange - startOfRange + 1)) + startOfRange;
};

getRandomNumber(1,8);

//Функция сравнения длины строки
const compareStringLenght = (text, symbolQuantity) => (text.lenght <= symbolQuantity);

compareStringLenght ('dasdja', 8);
