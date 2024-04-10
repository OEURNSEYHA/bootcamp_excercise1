// // 1.	Write a declaration function that take a parameter called: “name”, and return a greeting message including that name

// function greet(name) {
//   return "Hello " + name;
// }

// console.log(greet("seyha"));

// // 2.	Write an expression function that take two parameters “num1” & “num2” and returns their sum

// const sum = function (num1, num2) {
//   return num1 + num1;
// };
// console.log(sum(1, 2));


// 3.	Write an arrow function that that take an array of numbers as a parameter and returns the average of those numbers

// let numbers = [3, 5, 7, 8, 9];

// const average = (num) => {
//   let sum = 0;
//   for (let i = 0; i < num.length; i++) {
//     sum += num[i];
//   }
//   //    const sum = num.reduce((acc, num) => acc + num, 0);
//   return sum / num.length;
// };

// console.log(average(numbers));

// // 4.	Write an anonymous function that calculates BMI (Body Mass Index). Formula: BMI = weight / (height * height)
// // Immediately Invoked Function Expression (IIFE):
// (function (weight, height) {
//   let BMI = weight / (height * height);
//   console.log(BMI);
// })(2, 3);

// // 5.	Write a function that could take a parameter that is an array of objects representing products with `name`, `price` and `quantity` property and filter out products with a quantity of zero

// let products = [
//   {
//     name: "Cocacola",
//     price: 2,
//     quantity: 0,
//   },
//   {
//     name: "Fanta",
//     price: 2,
//     quantity: 2,
//   },
// ];

// function filterProductByQuantity(products) {
//   return products.filter((product) => product.quantity > 0);
// }

// console.log(filterProductByQuantity(products));

// // 6.	Write a function that could check if the password provided is strong or not. A strong password should have a minimum length of 8 characters

// function checkStrongPassword(password) {
//   if (password.length < 8) {
//     return "Password invalid";
//   }

//   return password;
// }

// console.log(checkStrongPassword("seyha*9090"));

// // 7.	Write a function that count vowels of a string that provided as an input and return the count of vowels (a, e, i, o, u)
// function countVowels(str) {
//   const vowels = "aeiouAEIOU";
//   let count = 0;

//   for (let i = 0; i < str.length; i++) {
//     if (vowels.includes(str[i])) {
//       count++;
//     }
//   }

//   return count;
// }

// // Example usage:
// const inputString = "Hello World";

// console.log(countVowels(inputString));

// // 8.	Write a function that could sort a list of numbers in ascending order.

// let array = [9,3,2,5,6];

// function sortAscending(numbers) {
//     const length = numbers.length;
//     for (let i = 0; i < length - 1; i++) {
//         for (let j = 0; j < length - 1 - i; j++) {
//             if (numbers[j] > numbers[j + 1]) {
//                 // Swap numbers[j] and numbers[j + 1]
//                 const temp = numbers[j];
//                 numbers[j] = numbers[j + 1];
//                 numbers[j + 1] = temp;
//             }
//         }
//     }

//     return numbers;

//     // return numbers.sort((a,b)=> a-b);
// }

// const sortedNumbers = sortAscending(array);
// console.log(sortedNumbers);

// // // 9.	Write a function that takes an array of numbers as an input and returns the median value
function calculateMedian(numbers) {
    // Sort the array in ascending order
    numbers.sort((a, b) => a - b);

    const length = numbers.length;
    const middleIndex = Math.floor(length / 2);

    // Check if the array has an odd number of elements
    if (length % 2 === 1) {
        // If odd, return the middle element
        return numbers[middleIndex];
    } else {
        // If even, return the average of the two middle elements
        return (numbers[middleIndex - 1] + numbers[middleIndex]) / 2;
    }
}

// Example usage:
const numbers1 = [1,6,8,9,7,5]; //[1,2,4,6,7,8]
console.log(calculateMedian(numbers1)); // Output: 3

// // 10.	Write a function that takes a non negative number as a parameter and returns the factorial of that parameter
// function factorial(n) {
//     if (n < 0) {
//         return "Factorial is not defined for negative numbers";
//     } else {
//         let result = 1;
//         for (let i = 2; i <= n; i++) {
//             result *= i;
//         }
//         return result;
//     }
// }

// // Example usage:
// const number = 1;
// console.log(factorial(number)); 