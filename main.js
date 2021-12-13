'use strict';

const body = document.body;
const books = document.querySelectorAll('.book');
const firstBook = books[1];
const secondBook = books[0];
const thirdBook = books[4];
const fourthBook = books[3];
const fifthBook = books[5];
const sixthBook = books[2];
const chaptersSecondBook = secondBook.querySelectorAll('li');
const chaptersFifthBook = fifthBook.querySelectorAll('li');
const chapterEightSixthBook = sixthBook.querySelectorAll('li')[8];
const adv = document.querySelector('.adv');
const liElem = document.createElement('li');


// Первое задание
firstBook.after(secondBook);
secondBook.after(thirdBook);
thirdBook.after(fourthBook);
fourthBook.after(fifthBook);
// Второе задание
body.style.backgroundImage = 'url("./image/you-dont-know-js.jpg")';
// Третье задание
thirdBook.querySelector('a').textContent = "Книга 3. this и Прототипы Объектов";
// Четвертое задание
adv.remove();
// Пятое задание
chaptersSecondBook[3].after(chaptersSecondBook[6]);
chaptersSecondBook[6].after(chaptersSecondBook[8]);
chaptersSecondBook[9].after(chaptersSecondBook[2]);

chaptersFifthBook[1].after(chaptersFifthBook[9]);
chaptersFifthBook[9].after(chaptersFifthBook[3]);
chaptersFifthBook[3].after(chaptersFifthBook[4]);
chaptersFifthBook[7].after(chaptersFifthBook[5]);
// Шестое задание
liElem.textContent = 'Глава 8: За пределами ES6';
chapterEightSixthBook.after(liElem);
// sixthBook.append(liElem);




