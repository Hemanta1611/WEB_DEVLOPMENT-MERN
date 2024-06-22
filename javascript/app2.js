let msg = "     he ll o   ";
console.log("Actual msg:", msg);
// let trimmed_msg = msg.trim(); // trim helps to remove extra spaces in starting and ending of a string
// console.log(trimmed_msg);


let user_name = "Hemanta Kumar Bhoi";
// console.log(user_name);
// user_name.toUpperCase();
// user_name.toLowerCase();


// let sentance1 = "I Love Coding";
// console.log(sentance1);
// let word = prompt("Enter a word you want to know of it: ");
// console.log(`Index of ${word}:`, sentance1.indexOf(word));


// Method Chaining:
let new_msg = msg.trim().toUpperCase();
console.log("New msg:", new_msg);


// Slicing: & Replace: & Repeat:
// str.slice(start_index, last_index);
// str.replace(old_value, new_value);
// str.repeat(number_of_repeatation);



// Array: elements with different types of items and are immuatable
let students = ["Hemanta", "Kumar", "Bhoi"];
let nums = [2, 7, 9, 11, 22, 77, 69];
nums[11] = 96;
let details = ["Abc", 7, "Xyz", 9];

// array methods:

students.push("OM") // add after last place
let pop1 = students.pop() // remove the last element
students.unshift("OM") // add at starting index
// students.shift() // remove the starting index element

students.indexOf("Hemanta"); // return index
students.includes("Hemanta"); // return true if present else false:

let students_nums = students.concat(nums);
students_nums.reverse();
nums.slice(2, 6);
// slice don't modify the main array , its just do modify by 1st copy the code
// splice modify directly the main array: 

let alphabet = ['a', 'b', 'd', 'z', 'c', 'x', 'p', 'h'];
alphabet.sort(); // don't work on numbers

students.splice(0, 2, "om", "hemant");

// just like const variable , we can do same for array also i.e. now the array change to static array(value changable array, size unchangable array) from dyanmic array 


// Nested Array = Multi-Dimensional Array
let rooms = [["Hemanta", 1], ["Sandeep", 2], ["Dinesh", 3], ["Vardhan", 4], ["Saurabh", 5]];
console.log(rooms);





