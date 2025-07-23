//1
/*
const temp = prompt("виведи 1  ,  2  ,  3");

switch ((Number, temp)) {
  case "1":
    console.log("Кава");

    break;

  case "2":
    console.log("Чай");

    break;

  case "3":
    console.log("Сік");
    break;
  default:
    console.log("не то число");
}
//2

const nices1 = prompt("напишіть від 1-7");

switch (Number(nices1)) {
  case 1:
    console.log("понеділок");
    break;
  case 2:
    console.log("вівторок");
    break;
  case 3:
    console.log("середа");
    break;
  case 4:
    console.log("чктвер");
    break;
  case 5:
    console.log("пятниця");
    break;
  case 6:
    console.log("субота");
    break;
  case 7:
    console.log("неділя");
    break;
  default:
    console.log("такого не існує ");
}

//3

let age = prompt("скажи який зараз місяць року і я скаду тобі пору (року)");

if (age < 2) {
  console.log("зима");
} else if (age < 5) {
  console.log("весна");
} else if (age < 8) {
  console.log("літо(зараз)");
} else if (age < 11) {
  console.log("осінь");
} else if (age === 12) {
  console.log("зима");
} else {
  console.log(" ви Пенсіонер (якщо навіть не можете сказати місяць року)");
}

//4

const colorado = prompt("виведи green or yellow or red");

switch (colorado) {
  case "green":
    console.log("Йди ато переїду тебе");

    break;

  case "yellow":
    console.log("Готуйся");

    break;

  case "red":
    console.log("Стій");
    break;
  default:
    console.log("Невідомий ");
}
//
// */
//5 ну я це завдання шось не дуже зрозумів як його робити
//
let num1 = 10;
let num2 = 5;
let result;

let operator = "-"; // '+', '-', '*', '/
//створи код  який створює змінні для зберігання двох чисел і оператора ( + - * /), виконує обчислення та виводить результат. У разі ділення на нуль виводиться попередження

switch (operator) {
  case "+":
    result = num1 + num2;
    console.log(result);
    break;
  case "-":
    result = num1 - num2;
    console.log(result);
    break;
  case "*":
    result = num1 * num2;
    console.log(result);
    break;
  case "/":
    if (num2 == 0) {
      console.log("на нуль ділить не можна");
    } else {
      result = num1 / num2;
      console.log(result);
    }
    break;
  default:
    console.log("помилка");
}
