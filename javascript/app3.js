// JavaScript Part 4

// console.log("Simple For Loop Example: ");
// for (let index = 0; index < 7; index++) {
//     console.log(index);
// }


// console.log("Simple For Loop Example with backward direction: ");
// for (let i = 7; i > 0; i--) {
//     console.log(i);
// }

// console.log("Print all odd numbers in a range: ");
// for (let index = 0; index < 15; index++) {
//     if(index % 2 == 1){
//         console.log(index)
//     }
// }

// console.log("Print all even numbers in a range: ");
// for (let index = 0; index < 15; index++) {
//     if(index % 2 == 0){
//         console.log(index)
//     }
// }


// console.log("Infinit LOOP: ");
// for (let index = 0; index => 0 ; index++) {
//     console.log(index);
// }


// let multiplicant = prompt("Write the number you want the table: ");
// multiplicant = parseInt(multiplicant); // automatically js convert prompt string to integer
// for (let index = 1; index <= 10; index++) {
//     console.log(multiplicant, "X",index, "=", (multiplicant*index));
// }


// for (let i = 0; i < 10; i++) {
//     console.log("i =", i);
//     for (let j = 0; j < 5; j++) {
//         console.log(j);
//     }
// }


// let i = 1;
// while (i <= 7) {
//     console.log(i);
//     i++;
// }


// let favMovie = "Avatar";
// while(true){
//     let guess = prompt("Guess my favourite movie: ");
//     if (guess.toLowerCase() == favMovie.toLowerCase()) {
//         console.log(`You guess correct movie: ${guess}`);
//         break;
//     }
//     else if(guess.toLowerCase() == "quit"){
//         break;
//     }
//     else{
//         alert("Wrong guess.. , Guess again");
//     }
// }


// let fruits = ["mango", "apple", "banana", "litchi", "orange"];
// fruits.push("pineApple");
// for (let i = 0; i < fruits.length; i++) {
//     console.log(i, fruits[i]);
// }
    

// let heroes = [["ironman", "spiderman", "thor"], ["superman", "wonder woman", "flash"]];
// for (let i = 0; i < heroes.length; i++){
//     console.log(`List #${i}`, heroes[i]);
//     for (let j = 0; j < heroes[i].length; j++) {
//         console.log(heroes[i][j]);        
//     }
//     console.log("\n");
// }


// for of loop: 
// let fruits = ["mango", "apple", "banana", "litchi", "orange"];

// for (let fruit of fruits){
//     console.log(fruit);
// }



// ToDo App
let todo = [];


while(true){
    let req = prompt("Please Enter your request: ");
    if(req.toLowerCase() == "quit"){
        alert("Quitting App..");
        console.log("App Quit..");
        break;
    }

    if(req.toLowerCase() == "list"){
        console.log("----------------")
        for (let i = 0; i < todo.length; i++) {
            console.log(i, todo[i]);
        }
        console.log("----------------")
    }else if(req.toLowerCase() == "add"){
        let task = prompt("Please enter the task you want to add: ");
        todo.push(task);
        console.log("Task added..");
    }else if(req.toLowerCase() == "delete"){
        let idx = prompt("Please enter the task index: ");
        todo.splice(idx, 1); // it will delete from index "idx" upto total of "1" element here, so only idx position element will be deleted
        console.log("Task Deleted..");
    }
    else{
        alert("Wrong request..");
    }
    
    // req = prompt("Please enter your request: ");
}