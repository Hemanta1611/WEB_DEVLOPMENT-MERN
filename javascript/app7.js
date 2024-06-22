console.log("Namaskar Prithvi");

// Array Method
// forEach function:-
let arr = [1, 2, 3, 4, 5];
function print(el) {
    console.log(el);
};
// arr.forEach(print);

// or

arr.forEach(function(el){
    console.log(el);
});



// Map function:-
let num = [1, 2, 3, 4];

let double = num.map((el) => {
    return el * 2;
});

console.log(double);

// filter function:-
let nums = [2, 4, 1, 5, 6, 2, 7, 8, 9];

let even = nums.filter((el) =>{
    return el % 2 == 0;
});

console.log(even);


// every function:-
// returs true if every elements of array gives true for some function. else returns false
[1, 2, 3, 4].every( (el) => {
    return el % 2 == 0;
});
[2, 4].every( (el) => (el % 2 == 0));


// some function:- similar to every but difference is true in "every" checks every elements but in "some" if any one element is satisfying the condition then 


// reduce function:-
[1, 2, 3, 4].reduce((a, b) => {
    return a + b;
})

let arr1 = [1, 2, 4, 3, 8, 4, 9, 10, 13, 1, 6, 7];
let max = arr1[0];
for (let i = 0; i < arr1.length; i++) {
    if(max < arr1[i]){
        max = arr1[i];
    }    
}
console.log("max number in the arr1", max);

// or
arr1.reduce((max, el) => {
    if(max < el){
        max = el;
    }
    return max;
});


// spread function:-
console.log(arr1);
console.log(...arr1); // spread function: "..." 
console.log(..."Hemanta");
console.log(Math.min(1, 3, 4, 2, 0, -1, -3));
console.log(Math.min(arr1), "   ", Math.min(...arr1));

const data = {
    email: "ironman@gmail.com",
    password: "abcd",
};

const dataCopy = {...data, id: 143,
    village: "Bhaleswar"
};


// rest function:-   opposite of spread
function sum(...args){
    for (let i = 0; i < args.length; i++) {
        console.log("you gave us: ", args[i]);
    }
}


// De-structure
let names = ["tony", "bruce", "steve", "peter"];
let [winner, runnerup, ...others] = names; // de-structuring
console.log(winner,"    ", runnerup); // "tony", "bruce"

// object destructuring
const student = {
    name: 'mad',
    age: '18',
    clss: 13,
    subjects: ["eng", "english", "japanese"],
    username: 'madQueen',
    password: "gaddhi"
};

let {username, age} = student;
console.log(username,"  ", age);

let {username: user, age: umar, city = "Bombay"} = student;
console.log(user,"  ", umar, city);