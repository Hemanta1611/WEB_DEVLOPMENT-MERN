const stu1 = {
    name: "adam",
    age: 25,
    marks: 95,
};

const stu2 = {
    name: "eve",
    age: 25,
    marks: 85,
};

const stu3 = {
    name: "lalu",
    age: 22,
    marks: 98,
};

/* OBJECT ORIENTED PROGRAMMING:
--> prototype
--> New Operator
--> constructors
--> classes
--> keywords(extends, super)

------- Object Prototype -------
-> Prototype are the mechanism by which JavaScript objects inherit features from one another.
-> It is like a single template object that all objects inherit methods and properties from without having their own copy
--> to access:  arr.__proto__   - reference
                Array.prototype   - actual

------- Factory Function -------
-> A function that creates objects

*/

// Factory Function:
function PersonMaker(name, age){
    const person = {
        name: name,
        age: age,
        talk(){
            console.log("my name is ", this.name);
        }
    };
    return person;
};

let p1 = PersonMaker("adam", 25);
let p2 = personalbar("eve", 25);
// p1.talk === p2.talk --> false (in factory function)

// Constructors: - it doesn't return any thing and start with capital letter:
function Person(name, age){
    this.name = name;
    this.age = age;
};

let p3 = new Person("adam", 25);  // person is normal function before use of "new" keyword
let p4 = new Person("eve", 25);     // "new" keyword helps to create a constructor

/*
--> new: The new operator lets developers create an instance of a user-defined object type or of one of
        the built-in object types that has a constructor function.

*/

Person.prototype.talk = function() {
    console.log(`Hi my name is ${this.name}`);
}

// p3.talk === p4.talk --> true (in constructor)


/*
------- Classes -------
-> classes are a template for creating objects
-> the constructor method is a special method of a class for creating and initializing an object instance of that class.

*/

class Persons{
    constructor(name, age){
        this.name = name;
        this.age = age;
    };
    talk(){
        console.log(`HI my name is ${this.name}`);
    };
};

let p5 = new Persons("adam", 25);
let p6 = new Persons("eve", 25);

// p5.talk === p6.talk


// Inheritance is a mechanism that allows us to create new classes on the basis of already existing classes.

class Per{
    constructor(name, age){
        console.log("Person class constructor");
        this.name = name;
        this.age = age;
    }
    talk(){
        console.log(`Hi, I am ${this.name}`);
    }    
};

class Student extends Per{
    constructor(marks){
        console.log("Student class constructor");
        this.marks = marks;
        super(name, age); // parent class constructor is being called
    }
}

let stud1 = new Student("adam", 25, 94);

class Teacher extends Per{
    constructor(subject){
        console.log("Teacher class constructor");
        this.subject = subject;
        super(name, age); // parent class constructor is being called
    }
}

let tea1 = new Teacher("eve", 25, 93);

