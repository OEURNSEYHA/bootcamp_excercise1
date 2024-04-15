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

const fs = require("fs");
// handleError;
const filePath = "text/example.txt";
function handleError(err, data) {
  if (err) {
    console.error("Error reading file:", err);
  } else {
    console.log("File contents:");
    console.log(data);
  }
}

const content = "hello every one";
function writeFileAndPrint(filePath, modification, callBack) {
  fs.writeFile(filePath, modification, "utf8", (err, data) =>
    callBack(err, data)
  );
}
// writeFileAndPrint(filePath, content ,handleError);

const writeFile = new Promise((resolve, reject)=>{
    resolve(
        
    );
})


writeFile.then((result) => {
    console.log(result);
}).catch((err) => {
    console.log(err)
});