/* eslint-disable no-console */

import {getRandomInteger, getRandomArrayElement} from './util.js';

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

//Создаём комментарий
const createComment = () => (
  {
    id: getRandomInteger(1, 1000),
    avatar: `img/avatar-${getRandomInteger(1, AVATAR_PICTURE_COUNT)}.svg`,
    message: `${getRandomArrayElement(COMMENT_MESSAGES)} ${getRandomArrayElement(COMMENT_MESSAGES)}`,
    name: getRandomArrayElement(COMMENT_NAMES),
  }
);

//Создаём описание к фото
const createDescription = () => {
  const photos = [];
  for (let i=1; i <= PHOTO_COUNT; i++) {
    photos.push({
      id: i,
      url: `photos/${i}.jpg`,
      description: getRandomArrayElement(PHOTO_DESCRIPTIONS),
      likes: getRandomInteger(MIN_LIKES_COUNT, MAX_LIKES_COUNT),
      comments: Array.from({length: getRandomInteger(1, MAX_COMMENTS_LIMIT)}, createComment),
    });
  }
  return photos;
};

export {createDescription};
