// DOM Document Object Model:

// console.log(document);
// console.dir(document);
// console.dir(documenet.all);

/* 
console.dir(document.all[8]);
console.dir(document.all[8].innerText)

document.all[8].innerText = "Peter Parker";


// Selecting Elements By Id:
document.getElementById("mainImg");

let imgObj = document.getElementById("mainImg");
console.dir(imgObj);

console.log(imgObj.src);
console.log(imgObj.tagName);
console.log(imgObj.id);



// Selecting Elements By Class:
let smallImages = document.getElementsByClassName("oldImg");
for (let i = 0; i < smallImages.length; i++) {
    console.dir(smallImages[i]);
    // console.dir(smallImages[i].src);
    // smallImages[i].src = "assets/spiderman_img.png";
    // console.log(`value of image no. ${i} is changed.`);
}



// Query Selectors: (also known to Css Selector)
console.dir(document.querySelector('p')); // Selects first p element
console.dir(document.querySelector("#description")); // selects element with id = myId
document.querySelector(".myClass"); // selects first element with class = myId
document.querySelector("div a");

document.querySelectorAll('p'); // Selects all p elements



// Setting Contents in Objects:
let para = document.querySelector('p');
// console.dir(para);
// console.log(para);
// console.log(para.innerText);  // shows the visible text contained in a node
// console.log(para.textContent); // shows the full text (both visible and non-visible)
// console.log(para.innerHTML);  // Shows the full markup

// styles unable to apply on .innerText because it sees as text we can do styleing using .innerHtml
let heading = document.querySelector('h1');
// heading.innerText = `<u> ${heading.innerText} </u>`;
heading.innerHTML = `<u> ${heading.innerText} </u>`;



// Manipulating Attributes: (id,class, style)
let img = document.querySelector('img');
img.getAttribute('id');
// img.setAttribute('id', 'spidermanImg');
// img.setAttribute('src', "assets/creation_2.jpeg");


// Manipulating Style:
// console.log("Heading Style: ", heading.style);
// console.dir(heading.style);
// heading.style.color = "Blue";
// heading.style.backgroundColor = "Red";
console.log(heading.style.color);

let links = document.querySelectorAll(".box a");
for (link of links) {
    link.style.color = "purple";
}

// "style" gives access to inline css only or it shows only inline css
// Class List:
heading.classList;
// heading.classList.add('green');
// heading.classList.remove('green');
// heading.classList.contains('green');



// Navigation ON Page:
let h4 = document.querySelector('h4');
h4.parentElement;
h4.children;  // empty
h4.previousElementSibling;
h4.nextElementSibling;


// Adding Elements on Page;
let newP = document.createElement('p');
console.dir(newP);
newP.innerText = "Hi, I am new Paragraph.";

let body = document.querySelector('body');
// body.appendChild(newP);

let box = document.querySelector('.box');
box.appendChild(newP);


// Removing elements on Page:
box.removeChild(newP);
*/

// Practice question begin with removing the body part:
// 1:
let para1 = document.createElement("p");
para1.innerText = "Hey I'm Red!";
para1.style.color = "red";

let body = document.querySelector('body');
body.append(para1);

// 2: 
let h3 = document.createElement('h3');
h3.innerText = "Hey I'm Blue!";
h3.style.color = "blue";
body.append(h3);

// 3:
let div = document.createElement("div");
let h1 = document.createElement("h1");
let para2 = document.createElement("p");

h1.innerText = "I'm in div";
para2.innerText = "ME TOO!";

div.appendChild(h1);
div.appendChild(para2);
div.classList.add('box');
body.append(div);