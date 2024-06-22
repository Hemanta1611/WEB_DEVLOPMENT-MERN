console.log("This is Function Tutorial");
console.log("\n");

function nice(name) {
    console.log("Hey "+ name + " You are pretty");
    console.log("Hey "+ name + " You are sexy");
    console.log("Hey "+ name + " Your eye is beautiful");
    console.log("Hey "+ name + " You have good sense of humor");
}

nice("Priyanka Chopra")


function sum(a, b) {
    // console.log("Sum of "+ a + " + " + b + " is " + (a + b));
    return a + b;
}

// sum(2,7);
result = sum(2,7);
console.log("Sum of these two numbers is " + result);

const func1 = (x)=> {
    console.log("I am an arrow function: ", x);
}
// here func1 is both a variable and a function

func1(34);
func1(56);
func1(45);
