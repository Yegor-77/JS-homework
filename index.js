//

const numbers = [1, 5, 8, 12, 3, 15, 7, 20];
const words = ["кіт", "собака", "миша", "папуга", "хомяк"];

function countItems(array, condition) {
  let count = 0;
  for (const element of array) {
    if (condition(element)) {
      count++;
    }
  }
  return count;
}

const isEven = (num) => num % 2 === 0;
const isLarge = (num) => num > 10;
const isShort = (word) => word.length <= 3;

console.log("Парних чисел:", countItems(numbers, isEven));
console.log("Чисел більше 10:", countItems(numbers, isLarge));
console.log("Коротких слів:", countItems(words, isShort));

// 2 це я не дуже розумію як робити

//3

function repeatMessage(times, messageCreator) {
  for (let i = 0; i < times; i++) {
    if (condition(element)) {
      messageCreator(i);
    }
  }
  return count;
}

//4

function processMovies(movies, action) {
  for (let i = 0; i < movies.length; i++) {
    action(movies[i], i);
  }
}

function printMovie(movie, index) {
  console.log(`${index + 1}. ${movie}`);
}

const movies = ["Inception", "Interstellar", "Matrix", "Avatar"];

console.log();
processMovies(movies, printMovie);
//кажетца так це має бути
