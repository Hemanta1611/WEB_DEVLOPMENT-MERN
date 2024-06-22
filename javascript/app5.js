// Functions: 
function hello(){
    console.log("hello");
}

hello();

function printName(){
    console.log("Hemanta Kumar Bhoi")
}

printName();


function print1to10(){
    for (let index = 1; index <= 10; index++) {
        console.log(index);
    }
}

function rollDice(){
    console.log(Math.floor(Math.random() * 6 + 1))
}


// Functions with Arguments: 
function sum(x, y){
    console.log(`${x} + ${y} = ${x+y}`);
    return x + y;
    console.log("Hello man"); // unreachable code as it is after return statement
}

function printTable(num){
    for(let i = 1; i <= 10; i++){
        console.log(`${num} X ${i} = ${num * i}`);
    }
}



let str = ["Hii", "Hello", "Bye", "Good-Bye"];
function concatinate(a){
    let line = "";
    for (let i = 0; i < a.length; i++) {
        line += a[i];
    }
    return line;
}

/*
Variable type:
1. global scope variable 
2. function scope variable
3. block {} scope variable applicable on let and const,,,, not on var(as it is older way to define)
4. lexical scope variable type of block scope only {}
*/


// Functions Expressions:
let add = function(a, b){
    return a + b;
}

console.log(add(69, 96));


// Higher Order Functions: 
function greet(func, n){
    for (let i = 0; i < n; i++) {
        func();
    }
}

let namaste = function(){
    console.log("Namaste 😀");
}

greet(namaste, 7);



// methods
const calculator = {
    add: function(a, b){
        return a + b;
    },
    sub: function(a, b){
        return a - b;
    },
    mul: function(a, b){
        return a * b;
    }
};

console.log(calculator.add(2, 7));
