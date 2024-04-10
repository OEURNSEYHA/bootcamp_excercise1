
// what is callback function ?


function greet () {
    console.log("hello");
}

function Message (msg){
    msg();
}

Message(greet);
