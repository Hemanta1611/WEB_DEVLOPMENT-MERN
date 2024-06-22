console.log("This is Loop tutorial");
console.log("\n");

console.log("for Loop example:");
for (let index = 0; index < 7; index++) {
    // const element = array[index];
    console.log(index);
    
}

let obj = {
    "name": "Hemanta",
    role: "Programmer",
    company: "Open AI"
}

console.log("\n");
console.log("for in loop example:");
for (const key in obj) {
    // if (Object.hasOwnProperty.call(obj, key)) {
        const element = obj[key];
        console.log(key+":", element);
        // }
    }
    
console.log("\n");
console.log("for of loop example:");
for (const c of "Hemanta") {
    console.log(c);
}


console.log("\n");
console.log("while loop example:");
let i = 0;
while (i < 10) {
    console.log(i);
    i++;
}


console.log("\n");
console.log("do while loop example:");
let a = 0;
do {
    console.log(a);
    a++;
} while (a < 2);

