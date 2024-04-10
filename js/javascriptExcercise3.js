// 1.Write a function called that takes an array of numbers and a callback function that processes each element of the array. Use the callback to square each number in the array

// function squareArray(arr, callBack) {
//   if (!Array.isArray(arr)) {
//     return "Input is not an array.";
//   }

//   if (typeof callBack !== `function`) {
//     return "Callback is not a function.";
//   }

//   return arr.map(callBack);

//   // return arr.map((num)=>{
//   //     return num*num
//   // });
// }

// function squareArray(arr, callBack) {
//   if (!Array.isArray(arr)) {
//     return "Input is not an array.";
//   }

//   if (typeof callBack !== 'function') {
//     return "Callback is not a function.";
//   }

//   // const result = [];
//   for (let i = 0; i < arr.length; i++) {
//     // result.push();
//     console.log(callBack(arr[i]))
//   } 

//   // return result;
// }


// const numArray = [1, 2, 3, 4, 5];
// function square(num) {
//   return num * num;
// }

// console.log(squareArray(numArray, square));

// 2.Create a function that takes an array of numbers and a callback. The callback should return true if a number is even. Use the callback to filter the array synchronously.

// const numFilters = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function isEven(num) {
//   return num % 2 === 0;
// }

// function filterArrayByCallBack(arr, callBack) {
//   if (!Array.isArray(arr)) {
//     return "Input is not an array.";
//   }

//   if (typeof callBack !== "function") {
//     return "Callback is not function.";
//   }

//   return arr.filter(callBack);

//   //   return arr.filter((num) => num % 2 === 0);
// }

// console.log(filterArrayByCallBack(numFilters, isEven));
//3. Use Node.js's fs module to read a file asynchronously:`fs.readFile`. Write a function that takes a file path and a callback. Use the callback to print the contents of the file to the console.

const fs = require("fs");
// function handleError(err, data) {
//   if (err) {
//     console.error("Error reading file:", err);
//   } else {
//     console.log("File contents:");
//     console.log(data);
//   }
// }

// Example usage:
const filePath = "text/example.txt";

function readFileAndPrint(filePath, callback) {
  // Read the file asynchronously
  fs.readFile(filePath, "utf8", (err, data) => {
    // callback(err, data);

    if(err){
        return err
    }else{
        return data
    }
  });
}

// readFileAndPrint(filePath, handleError);

// 4.Use Node.js's fs module to write a file asynchronously `fs.writeFile`. Write a function that takes a file path and a callback. Use the callback to write the contents of the file to the file path.
// const content = "hello every one";
// function writeFileAndPrint(filePath, modification, callBack) {
//   fs.writeFile(filePath, modification, "utf8", (err, data) =>
//     callBack(err, data)
//   );
// }
// writeFileAndPrint(filePath, content ,handleError);

// 5. Use the example 3 & 4, write in the below scenario:
// Read the context of `input.txt`
// Append “First modification” to the content and write it to `output1.txt`
// Read `output1.txt` and append “SEcond modification” to the file `output2.txt`
// Finally read `output2.txt` and print to the console
// Read the content of `input.txt`
// const pathFileInput = "text/input.txt";

// readFileAndPrint(pathFileInput, (err, data) => {
//   handleError(err);

//   // Append "First modification" to the content
//   const modifiedContent1 = data + "First modification";

//   // Write the modified content to `output1.txt`
//   const pathFileOutput1 = "text/output1.txt";

//   writeFileAndPrint(pathFileOutput1, modifiedContent1, (err) => {
//     handleError(err, data);

//     // Read the content of `output1.txt`
//     readFileAndPrint(pathFileOutput1, (err, data) => {
//       handleError(err, data);

//       // Append "Second modification" to the content
//       const modifiedContent2 = data + "Second modification";

//       // Write the modified content to `output2.txt`
//       const pathFileOutput2 = "text/output2.txt";

//       writeFileAndPrint(pathFileOutput2, modifiedContent2, (err) => {
//         handleError(err, data);

//         // Finally, read the content of `output2.txt` and print to the console
//         readFileAndPrint(pathFileOutput2, (err, data) => {
//           handleError(err, data);
//           console.log("Final content of output2.txt:");
//           console.log(data);
//         });
//       });
//     });
//   });
// });
