// async & await keywords:
// async function bydefault return a promise

/*
async function greet(){
    // throw "weak connection";
    return `Hello `;
}

greet()
    .then((result) => {
        console.log("promised resolved");
        console.log("result was: ", result);
    })
    .catch((err) =>{
        console.log("promise rejected with error: ", err);
    })
*/


// await: pause the execution of its surrounding async function until the promise is settled (i.e. resolved or rejectd)
function getNum(){
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            let num = Math.floor(Math.random() * 10) + 1
            console.log(num);
            resolve();
        }, 1000);
    });
}

async function demo(){
    // getNum();
    // getNum();
    // getNum(); // all these 3 function executes at a time

    // to execute one by one we use async:
    await getNum();
    await getNum();
    await getNum();
}

let h1 = document.querySelector("h1");

// minimizing the code used for changing the color of h1 heading:
function changeColor(color, delay){
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            h1.style.color = `${color}`;
            console.log(`color changed to ${color}`);
            resolve("color changed");
        }, delay);
    });
}

async function changeColorDemo(){
    await changeColor("red", 1000);
    await changeColor("orange", 1000);
    await changeColor("pink", 1000);
    await changeColor("turquoise", 1000);
}

