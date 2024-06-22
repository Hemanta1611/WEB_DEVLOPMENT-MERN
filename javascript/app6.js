// "this" keyword
const student = {
    name: "Hemanta",
    age: 20,
    eng: 88,
    math: 94,
    science: 93,
    getAvg(){
        let avg = (this.eng + this.math + this.science) / 3;
        console.log(`${this.name} got average marks = ${avg}`);
    }
};

// try and catch keyword
console.log("HEllo 1");
console.log("HEllo 2");
// console.log(a);
try {
    console.log(a);
} catch(error) {
    console.log("Variable {a} doesn't exist");
    console.log(error);
}
console.log("HEllo 3");
console.log("HEllo 4");
console.log("HEllo 5");


// Arrow Functions 
const sumation = (a, b) => {
    console.log(a + b);
};


const cube = (a) => {
    return a ** 3;
};


// Implicit return in Arrow Function
const cub = a => a ** 3


// Set Time-Out Function -- In-build function
// syntax: setTimeout(function, timeout)   -- timeout in mili-second
console.log("Hi There!");

setTimeout(() => {
    console.log("Apna College");
}, 4000); // it will execute after 4 seconds

console.log("Welcom To");


// set interval
// syntax: setInterval(function, interval)
console.log("Go There-->");

let id = setInterval(() => {
    console.log("Bye Bye");
}, 2000); // it will print repeatedly after each 2 seconds pass

// clearInterval(id); // to stop the repeatation in console platform


//  This with Arrow Function: 
const girl = {
    name: "Madhuri",
    marks: 95,
    prop: this, // global scope
    getName: function(){
        return this.name;  // for normal function 'this' meant for global scope i.e girl object 
    },
    getmarks: () => {
        return this.marks; // for arrow function 'this' meant for parent's scope i.e. window object
    },
};


// 
const printNtimes = (n) => {
    let count = 0;
    const id = setInterval( () => {
    console.log("Hello World!");
    count++;
    if (count == n) {
        clearInterval(id);
    }
    }, 2000)
}