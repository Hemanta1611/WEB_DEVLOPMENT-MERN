/*
------- TypeScript:-------
-> JS is dynamic typed, where we can chage variabale type
-> TS is static typed, where we can't change varibale type
Feature          JavaScript       TypeScript
--------         -----------      -----------
Type system      Dynamic            Static
Compilation      Interpreted        Compiled
Inheritance      Prototype-based    Class-based
Tooling          Limited            Extensive
Learning curve   Easy               Moderate


*/

console.log("Hello World");
console.log("I Love You");

// let a = 7;
// let b = 9;

// console.log("Sum of", a, "and", b, "is :", a+b);

// let output = "The sum is: " + (a+b) + ".";
// console.log(output);


// template literal using backtick(``) and ( ${} )
// let output = `The sum of ${a} and ${b} is ${a+b}.`;
// console.log(output);

// if (2 == 2) {
//     console.log("True");
// } 
// else {
//     console.log("False");
// }


// str = "anonymous hemanta";

// if (str[0] == 'a' && str.length > 3) {
//     console.log("Good String!");
// }
// else{
//     console.log("Not a good string..");
// }



/* 
Fasly values: false, 0, -0, On(BigInt value), ""(empty string), null, undefined, NaN
Truthy values: Everything else..
 */


// Switch Case
let color = "red"

switch(color){
    case "red":
        console.log("Stop");
        break;
    case "yellow":
        console.log("Slow Down");
        break;
    case "green":
        console.log("Go");
        break;
    default:
        console.log("Broken Light");
}


/*
For printting anything using js:
use --> console.log()

for taking any user input using js:
use --> alert();
    --> prompt();

*/


// alert("This is Simple Alert..");
// console.error("This is an error msg..");
// console.warn("This is waring msg..");

let fullname = prompt("Enter your name: ");
// console.log("Welcome", fullname, "to our JS model.");
alert(`Welcome ${fullname} to our JS model.`)

