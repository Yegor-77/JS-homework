//1
let result = 5 + 5 + "5";
console.log(result);
console.log(typeof result);

//2
let email = "egorhmeluk@gmail.com";

let hasAt = email.includes("@");

let length = email.length;

console.log("Email містить '@':", hasAt);
console.log("Кількість символів у email:", length);

//3
let wordOne = "My";
let wordTwo = "name";
let wordTHre = "is";

let fullName = wordOne + wordTwo + wordTHre;

fullName = fullName + "Yehor";

console.log(fullName);

//4
let userNames = "imYehorkaa";
let payments = 300;

alert(`Дякуємо, ${userNames}! До сплати ${payments} гривень`);
