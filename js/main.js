/* eslint-disable no-console */
//Функкция выдачи случайного числа из заданного диапазона, включая начальное и конечное значение
const getRandomInteger = (startOfRange, endOfRange) => {

  //Проверка границ диапазона на то, что они не отрицательные и начало больше конца
  if(startOfRange < 0 || endOfRange < 0 || startOfRange >= endOfRange) {
    return alert('Неверные значения границ диапазона, введите заново');
  }

  startOfRange = Math.ceil(startOfRange);
  endOfRange = Math.floor(endOfRange);
  return Math.floor(Math.random() * (endOfRange - startOfRange + 1)) + startOfRange;
};

//Функция сравнения длины строки
const compareStringLenght = (text, symbolQuantity) => (text.lenght <= symbolQuantity);

//Число фотографий с описаниями
const PHOTO_COUNT = 25;

//Набор подписей к фото
const PHOTO_DESCRIPTIONS = [
  'Котосмузи',
  'Над крылом самолёта',
  'Прекрасный весенний закат',
  'Контрасты Токио',
  'МОРЕ наконец-то!',
  'Здоровый образ жизни',
  'Отпуск! УРА!',
];

//Набор имён комментаторов
const COMMENT_NAMES = [
  'Иван Иваныч',
  'Джон Сноу',
  'Галадриель',
  'Дарт Вейдер',
  'Злой Йожик',
  'Джон Коннор',
  'Сара Коннор',
  'Джейн Эйр',
  'Королева зергов',
  'Мисс конгениальность',
  'Алисия Сильверстоун',
  'Саурон',
];

//Набор сообщений комментаторов
const COMMENT_MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

//Максимальное количество комментариев в описании
const MAX_COMMENTS_LIMIT = 3;

//Количество изображений с аватарками в папке img
const AVATAR_PICTURE_COUNT = 6;

//Минимальное и максимальное количество лайков
const MIN_LIKES_COUNT = 15;
const MAX_LIKES_COUNT = 200;

//Определяем случайный элемент в массиве
const getRandomArrayElement = (elements) => {
 return elements[getRandomInteger(0, elements.length - 1)];
};

//Создаём комментарий
const createComment = () => {
  return {
    id: getRandomInteger(1, 1000),
    avatar: `img/avatar-${getRandomInteger(1, AVATAR_PICTURE_COUNT)}.svg`,
    message: `${getRandomArrayElement(COMMENT_MESSAGES)} ${getRandomArrayElement(COMMENT_MESSAGES)}`,
    name: getRandomArrayElement(COMMENT_NAMES),
  };
};

//Создаём описание к фото
const createDescription = () => {
  return {
    id: getRandomInteger(1, PHOTO_COUNT),
    url: `photos/${getRandomInteger(1, PHOTO_COUNT)}.jpg`,
    description: getRandomArrayElement(PHOTO_DESCRIPTIONS),
    likes: getRandomInteger(MIN_LIKES_COUNT, MAX_LIKES_COUNT),
    comments: Array.from({length: getRandomInteger(1, MAX_COMMENTS_LIMIT)}, createComment),
  };
};

//Создаём 25 описаний к фото
const samePhotoDescriptions = Array.from({length: PHOTO_COUNT}, createDescription);

console.log(samePhotoDescriptions);
