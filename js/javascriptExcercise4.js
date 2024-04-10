// 1.	Create a function that could take an argument which is an array of objects. Each object should contain property name and age. The function should return a new list which only contains the user who have higher than 18 years old
// const users = [
//   {
//     name: "seyha",
//     age: 21,
//   },
//   {
//     name: "nona",
//     age: 17,
//   },
// ];

// function newList(list) {
//   const result = list.filter((user) => user.age > 18);
//   return result;
// }

// console.log(newList(user));

// 2.	Given an array of numbers which includes duplicates, use `filter` method to create a new array that contains only unique values

const number = [1,1,2,3,4,5,5];
// const result = number.filter((num, index)=> number.indexOf(num) === index  );
// const result = number.filter((num, index, self)=> self.indexOf(num) === index);
// console.log(result);

// 3.	Given an array of user objects which include property name and age, use the `map` method to create a new array that contains just the names of the users

// function getUserName (users) {
//     const getUser = users.map((user)=> user.name);
//     return getUser;
// }

// console.log(getUserName(users))

// 4. 4.	Given an array of date string in the format “YYYY-MM-DD”. Use the ‘map’ method to transform the array [“2024-01-01”, “2024-02-02”, “2024-04-04”] into an array of date strings in the format “DD/MM/YYYY”

// const dates = ["2024-01-01", "2024-02-02", "2024-04-04"];

// const transformedDates = dates.map(dateString => {
//   const [year, month, day] = dateString.split("-");
//   return `${day}/${month}/${year}`;
// });

// console.log(transformedDates);

// 5. Given an array of numbers, use the `reduce` method to find the maximum number of the array;

// const numbers = [10, 5, 8, 20, 15];
// const maxNumber = numbers.reduce((max, current) => {
//     // console.log(max);
//     console.log(current);
//   // If current number is greater than max, update max
//   if (current > max) {
//     return current;
//   } else {
//     return max;
//   }
// }, numbers[0]); // Initialize max with the first element of the array

// console.log(maxNumber);

// 6.	You have an array of objects where each object has properties `name` and `category`. Use the `reduce` method to group these objects by category.
// Input: [ {name: “Bread”, category: “Grocery”}, {name: “Butter”, category: “Grocery”}, {name: “Shampoo”, category: “Personal Care”}]
// Output: { “Grocery”: [“Bread”, “Butter”], “Personal Care”: [“Shampoo”]}



const items = [
  {name: "Bread", category: "Grocery"},
  {name: "Butter", category: "Grocery"},
  {name: "Shampoo", category: "Personal Care"}
];

const groupedItems = items.reduce((grouped, item) => {
  // If the category doesn't exist in the grouped object, initialize it as an empty array
  if (!grouped[item.category]) {
    grouped[item.category] = [];
  }
  
  // Push the item's name into the corresponding category array
  grouped[item.category].push(item.name);

  return grouped;
}, {});

console.log(groupedItems);
