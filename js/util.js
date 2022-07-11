//Функкция выдачи случайного числа из заданного диапазона, включая начальное и конечное значение
const getRandomInteger = (startOfRange, endOfRange) => {

  //Проверка границ диапазона на то, что они не отрицательные и начало больше конца
  if(startOfRange < 0 || endOfRange < 0 || startOfRange >= endOfRange) {
    throw new Error('Неверные значения границ диапазона, введите заново');
  }

  startOfRange = Math.ceil(startOfRange);
  endOfRange = Math.floor(endOfRange);
  return Math.floor(Math.random() * (endOfRange - startOfRange + 1)) + startOfRange;
};

//Функция сравнения длины строки
const compareStringLength = (text, symbolQuantity) => (text.length <= symbolQuantity);
compareStringLength();

//Определяем случайный элемент в массиве
const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

export {getRandomInteger, getRandomArrayElement};
