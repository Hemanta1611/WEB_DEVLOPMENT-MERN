// DOM Events:
// Events are signals that something has occurred. (user input / actions)

// let btn = document.querySelector("button");
// console.dir(btn);

// btn.onclick = function() {
//     alert("button was clicked.");
//     // console.log("button was clicked.");
// };

let btns = document.querySelectorAll("button");

// for (const btn of btns) {
//     btn.onclick = sayName; // it will not execute
//     btn.onclick = sayHello; // it will execute,,, only one function is execute on "onclick" method
//     btn.onmouseenter = function(){
//         console.log("you entered a button");
//     };
// }

function sayHello(){
    alert("hello!");
};
function sayName(){
    alert("Apna College");
};


// Event Listner:
// for (const btn of btns) {
//     btn.addEventListener("click", sayHello);
//     btn.addEventListener("click", sayName);
// }; // all the methods will execute in eventlistner unlike "onclick"



// Activity:
let btn = document.querySelector("button");
// click event can be applicable on multiple tage not only button tag, i.e. p, div, h, etc

// btn.addEventListener("click", function(){
//     let h3 = document.querySelector('h3');
//     let randomColor = getRandomColor();
//     h3.innerText = `Random Color: [ ${randomColor} ]`;
//     h3.style.color = randomColor;

//     let div = document.querySelector('div');
//     div.style.backgroundColor = randomColor;
// });

function getRandomColor(){
    let red = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);

    let color = `rgb(${red}, ${green}, ${blue})`;
    return color;
}


// "this" in event listner:
// btn.addEventListener("click", function(){
//     // console.log(this);
//     console.log(this.innerText);
//     this.style.backgroundColor = getRandomColor();
//     this.style.color = getRandomColor();
// });



// Keyboard Events:
let inp = document.querySelector("input")

// inp.addEventListener("keydown", function(){
//     console.log("Key was pressed");
// });

// inp.addEventListener("keyup", function(event){
//     console.log("Key: ", event.key);
//     console.log("Code: ", event.code);
//     console.log("Key was released");
//     console.log(event);
// });



// Form Events:
let form = document.querySelector("form");

// form.addEventListener("submit", function(event){
//     alert("form submitted");
//     event.preventDefault(); // used for preventing to move to next page:
// })


// Extracting Form Datas:
// form.addEventListener("submit", function(event){
//     event.preventDefault();
//     // console.log("Input: ", inp.value);
//     console.dir(form);
//     let user = document.querySelector("#user");
//     let pass = this.elements[1];

//     console.log("username: ", user.value);
//     console.log("password: ", pass.value);
// })


// Text Editor using "input" event (similar to "change" event but "input" evnet tracks changes each time and in "change" event it tracks only final changes)

inp.addEventListener("input", function(){
    console.log(inp.value);
    let p = document.querySelector("p");
    p.innerText = inp.value;
})

