// 1. Callback Hell Mock Database

// const mockDatabase = [{id:1, name: "sok", id:2,name:"sao"},{id:3,name:"pisey"}];
// function getUserInfoById (userId, callback){
//     setTimeout(()=>{
//       const user = mockDatabase.find((user)=> user.id === userId);
//       if(user){

//           callback(null, user);
//       }else{
//         callback("User not found")
//       }
//     },2000);
// }

// function processDataCapitalizing (user, callback){
//     setTimeout(()=>{
//         if(user){
//             user.name = user.name.toUpperCase();
//             callback(null, user);
//         }else{
//             callback("User data processing failed");
//         }
//     },15000)
// }

// getUserInfoById(2, (err, user)=>{
//     if(err){
//         console.log(err);
//     }
//     processDataCapitalizing(user, (err, processUser)=> {
//         if(err){
//             console.log(err);
//             return;
//         }
//         console.log("Processed user data:", processUser)
//     })
// })

// 2.  
// const fs = require("fs").promises;
// function handleError(err) {
//   if (err) {
//     console.error("Error:", err);
//   }
// }

// const filePath = "text/example.txt";

// function readFile(filePath) {
//   return fs.readFile(filePath, "utf8");
// }

// function writeFile(filePath, data) {
//   return fs.writeFile(filePath, data, "utf8");
// }

// const pathFileInput = "text/input.txt";

// readFile(pathFileInput)
//   .then((data) => {
//     console.log("File contents:", data);
//     const modifiedContent1 = data + "First modification";
//     const pathFileOutput1 = "text/output1.txt";
//     return writeFile(pathFileOutput1, modifiedContent1);
//   })
//   .then(() => {
//     console.log("Successfully wrote to output1.txt");
//     const pathFileOutput1 = "text/output1.txt";
//     return readFile(pathFileOutput1);
//   })
//   .then((data) => {
//     console.log("Content of output1.txt:", data);
//     const modifiedContent2 = data + "Second modification";
//     const pathFileOutput2 = "text/output2.txt";
//     return writeFile(pathFileOutput2, modifiedContent2);
//   })
//   .then(() => {
//     console.log("Successfully wrote to output2.txt");
//     const pathFileOutput2 = "text/output2.txt";
//     return readFile(pathFileOutput2);
//   })
//   .then((data) => {
//     console.log("Final content of output2.txt:", data);
//   })
//   .catch((err) => {
//     handleError(err);
//   });


  // 3.

  const fs = require("fs").promises;

async function handleError(err) {
  if (err) {
    console.error("Error:", err);
  }
}

async function main() {
  try {
    const pathFileInput = "text/input.txt";
    const data = await fs.readFile(pathFileInput, "utf8");
    console.log("File contents:", data);

    const modifiedContent1 = data + "First modification";
    const pathFileOutput1 = "text/output1.txt";
    await fs.writeFile(pathFileOutput1, modifiedContent1);
    console.log("Successfully wrote to output1.txt");

    const contentOutput1 = await fs.readFile(pathFileOutput1, "utf8");
    console.log("Content of output1.txt:", contentOutput1);

    const modifiedContent2 = contentOutput1 + "Second modification";
    const pathFileOutput2 = "text/output2.txt";
    await fs.writeFile(pathFileOutput2, modifiedContent2);
    console.log("Successfully wrote to output2.txt");

    const contentOutput2 = await fs.readFile(pathFileOutput2, "utf8");
    console.log("Final content of output2.txt:", contentOutput2);
  } catch (err) {
    await handleError(err);
  }
}

main();
