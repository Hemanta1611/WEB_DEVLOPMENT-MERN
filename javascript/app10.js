// Call Stack:- (Stack of function calls)
function one(){
    return 1;
}

function two(){
    return one() + one();
}

function three(){
    ans = two() + one();
    console.log(ans);
}

// three();

/* 
call stack: 1st- three()
            2nd - two()
            3rd - one() -- inside two, call inside the stack, return value and remove from stack
            4th - one() -- inside two, call inside the stack, return value and remove from stack
                - two() -- remove from the stack after return value
            5th - one() -- inside three, call inside the stack, return value 
                - three() -- remove from the stack after returning the value    
*/

// Breakpoints:

// JS is Single Threaded:
// setTimeout(() => {
//     console.log("Apna College");
// }, 2000);

// console.log("Hello World!");


// CAll BAck HEll:
let h1 = document.querySelector("h1");

// setTimeout(() => {
//     h1.style.color = "red";
// }, 1000);
// setTimeout(() => {
//     h1.style.color = "orange";
// }, 2000);
// setTimeout(() => {
//     h1.style.color = "cyane";
// }, 3000);


// function changeColor(color, delay, nextColorChange){ // nextColorChange is call back function
//     setTimeout(() => {
//         h1.style.color = `${color}`;
//         if(nextColorChange) nextColorChange(); // if true then only execute
//     }, delay);
// }

// this nesting is called "callback hell"
// we do this because js code can be asynchronous so to make it synchronous we do like this and it became callback hell
// changeColor("red", 1000, () =>{
//     changeColor("orange", 1000, () =>{
//         changeColor("pink", 1000);
//     });
// });


// changeColor("orange", 2000);
// changeColor("pink", 3000);


/* -------- to prevent callback hell we use : promises and async and await like features ------- */


// Setting up for promise: due to callback hell
/*
function savetoDB(data, success, failure){
    let internetSpeed = Math.floor(Math.random() * 10) + 1;
    if(internetSpeed > 4){
        // console.log("Your data was saved: ", data);
        success();
    }
    else{
        // console.log("weak connection, data not saved")
        failure();
    }
}
*/

// call back hell
/*
savetoDB("Apna College", () =>{
    console.log("success1: your data was saved");
    savetoDB("Hello World", ()=>{
        console.log("success2: data2 was saved");
        savetoDB("kya kar rahe ho bro", () =>{
            console.log("success3: data3 was saved");
        },
        () => {
            console.log("failure3: data3 not saved");
        });
    },
    () => {
        console.log("failure2: data2 not saved");
    });
},
() => {
    console.log("failure1: weak connection, data not saved");
});
*/

// promises:
function savetoDB(data){
    // return new Promise((resolve, reject) => {
    return new Promise((success, failure) => {
        let internetSpeed = Math.floor(Math.random() * 10) + 1;
        if(internetSpeed > 4){
            success("success: data was saved");
        }
        else{
            failure("failure: data not saved due to weak connections.");
        }
    })
}

// state of promise: pending, rejected/error, fulfilled/resolved
savetoDB("Hello World")
    .then((result) => {
        console.log("result: ", result);
        console.log("data1 saved");
        // savetoDB("Apna College")
        //     .then(() =>{
        //         console.log("Data2 was saved");
        //     }) // ---- it becomes nested so we will not do like this. instead we will return and do promise chaining:
        return savetoDB("Apna College");
    })
    .then((result) => {
        console.log("result: ", result);
        console.log("Data2 was saved");
        return savetoDB("kya chal raha he bro");
    })
    .then((result) =>{
        console.log("result: ", result);
        console.log("Data3 was saved");
    })
    .catch((error) => {
        console.log("error: ", error);
        console.log("promise was rejected");
    })




function changeColor(color, delay){
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            h1.style.color = `${color}`;
            resolve("color changed");
        }, delay);
    });
}

changeColor("red", 1000)
    .then(() =>{
        console.log("changed to red color");
        return changeColor("orange", 1000);
    })
    .then(() => {
        console.log("changed to orange color");
        return changeColor("pink", 1000);
    })
    .then(() => {
        console.log("changed to pink color");
    })


