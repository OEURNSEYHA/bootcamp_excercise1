// 1.	Write a declaration function that take a parameter called: “name”, and return a greeting message including that name

function greet(name) {
  return "Hello " + name;
}

console.log(greet("seyha"));

// 2.	Write an expression function that take two parameters “num1” & “num2” and returns their sum

const sum = function (num1, num2) {
  return num1 + num1;
};
console.log(sum(1, 2));

// 3.	Write an arrow function that that take an array of numbers as a parameter and returns the average of those numbers
let numbers = [3, 5, 7, 8, 9];

const average = (num) => {
  let sum = 0;
  for (let i = 0; i < num.length; i++) {
    sum += num[i];
  }
  //    const sum = num.reduce((acc, num) => acc + num, 0);
  return sum / num.length;
};

console.log(average(numbers));

// 4.	Write an anonymous function that calculates BMI (Body Mass Index). Formula: BMI = weight / (height * height)

(function (weight, height) {
    let BMI = weight/(height*height);
  console.log(BMI);
})(2,3)

// 5.	Write a function that could take a parameter that is an array of objects representing products with `name`, `price` and `quantity` property and filter out products with a quantity of zero


