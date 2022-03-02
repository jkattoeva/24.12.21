// var message = prompt("What is your message?", "no message"); //prompt
// if (message === "") {
//   message  = "no message";
// }
// alert(message);

//string "1991"
//number 1991
//boolean true false

// var year = prompt("What year Kyrgyzstan gained independence?"); //prompt всегда возвращает строку!
// if (year === "1991") {
//   alert("Correct");
// }
// else {
//   alert("incorrect")
// }

// var age = prompt("How old are you?");
// var year = 2020 - age;
// console.log(year);

// alert();
// console.log(); наводив мышкой на функции можем узнать как правильно использовать те или иные функции
// confirm();

// var year = propmt("What year Kyrgyzstan independent?");
// if (year > 1991) {
//   alert("This years after independence year.");
// }
// else if (year === "1991"){
//   alert("You got it!");
// }
// else {
//   alert("This year before independence year.");
// }

// var age = prompt("How much year you go to the  school");
// if (age > 9) {
//   alert("Ты уже в старших классах");
// }
// else if (age === "50") {
//   alert("Ты скоро перестанешь быть школьником");
// }
// else {
//   alert("You else smaller");
// }

// var currentNumber = 0; //текущее число
// var stopNumber = 50; //число остановки

// // if (currentNumber < stopNumber) {
// //   currentNumber = currentNumber + 1;
// // }

// while (currentNumber < stopNumber) { //пока
//   currentNumber = currentNumber + 1;
//   console.log(currentNumber);
// }

// var currentNumber = 150; //текущее число
// var stopNumber = 0; //число остановки

// while (currentNumber > stopNumber) { //пока
//   currentNumber = currentNumber - 1;
//   console.log(currentNumber);
// }


// for (var i=0; i<=15; i++) { //цикл разделенный в скобках ;
//   console.log(i);
// }

// for (var i=150; i>0; i-;) {
//   console.log(i);
// }

var country = prompt('What is the country you want know capital of?');
if (country === "USA") {
  alert("Washington");
}
else if (country === "Kyrgyzstan") {
  alert("Bishkek");
}
else if (country === "Kazakhstan") {
  alert("Nur-Sultan");
}
else {
  alert("We don't know this country");
}