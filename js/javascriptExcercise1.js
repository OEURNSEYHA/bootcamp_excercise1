// 1.	Iterate through the numbers 1 to 10, and at each iteration print “i”

for (let i = 1; i <= 10; i++) {
    console.log(i);
  }
  
  // 2.	Iterate through the numbers 10 to 1, and at each iteration print “i”
  
  for (let i = 10; i >= 1; i--) {
    console.log(i);
  }
  
  // 3.	Convert numerical grades into letter grades (A, B, C, D, E, F)
  
  function numericalToLetterGrade(grade) {
    if (grade < 0 || grade > 100) {
      return "Invalid Grade";
    } else if (grade >= 90) {
      return "A";
    } else if (grade >= 80) {
      return "B";
    } else if (grade >= 70) {
      return "C";
    } else if (grade >= 60) {
      return "D";
    } else if (grade >= 50) {
      return "E";
    } else {
      return "F";
    }
  }
  
  console.log(numericalToLetterGrade(100));
  
  // 4.	A company has a list of employees and their salary in separate arrays. You are tasked with the job of printing our the name of each employee and the employee’s salary as a string in the format: “Employee name: Employee salary”
  // Example: let employees = [“Lara”, “Evee”, “Simi”]
  // let salary = [1000, 2000, 120.90]
  
  let employee = ["Lara", "Evee", "Simi"];
  let salary = [1000, 2000, 120.9];
  for (let i = 0; i < employee.length; i++) {
    console.log(`${employee[i]}=${salary[i]}`);
  }
  
  // 5.	Write a loop that displays from 1 to 10 except even numbers?
  
  for (let i = 1; i <= 10; i++) {
    if (i % 2 !== 0) {
      console.log(i);
    }
  }
  
  // 6.	Write a program that count the odd and even numbers from the list of numbers containing 1 to 10
  
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let evenCount = 0;
  let oddCount = 0;
  
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      evenCount++;
    } else {
      oddCount++;
    }
  }
  console.log("Number of even numbers:", evenCount);
  console.log("Number of odd numbers:", oddCount);
  
  // 7.	Write a program that prints the numbers from 1 to 100. But for multiples of three print “Fizz” instead of number and for the multiples of five print “Buzz”. For numbers which are multiples of both three and five, print “FizzBuzz”
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
  
  // 8.	Write a program that uses a loop to calculate the sum of all numbers in an array.
  
  let array = [1, 2, 3, 4, 5];
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  console.log("total=" + sum);
  
  // 9.	Write a program that prints all prime numbers between 1 and 100.
  
  function isPrime(num) {
    if (num <= 1) {
      return false;
    }
    for (let i = 2; i <= num / 2; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
  
  function printPrimesInRange(start, end) {
    for (let i = start; i <= end; i++) {
      if (isPrime(i)) {
        console.log(i);
      }
    }
  }
  
  printPrimesInRange(1, 100);
  
  // 10.	Write a program that finds the largest number in an array using a loop.
  function findLargestNumber(arr) {
    if (arr.length === 0) {
      return null; // Return null if array is empty
    }
    let largest = arr[0]; // Assume the first element is the largest
  
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > largest) {
        largest = arr[i]; // Update largest if a larger number is found
      }
    }
  
    return largest; // Return the largest number found in the array
  }
  
  // Example usage:
  const number = [10, 5, 20, 15, 30];
  const largestNumber = findLargestNumber(number);
  console.log("The largest number in the array is:", largestNumber);
  