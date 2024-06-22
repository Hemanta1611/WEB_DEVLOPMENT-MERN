// object literals:
let delhi = {
    latitude: "28.7041* N",
    longitude: "77.1025* E"
};

const student = {
    name: "Hemanta Kumar Bhoi",
    regNo: "22UG011183",
    cgpa: 8.65,
    age: 21,
    house: ["NC 13", 53]
};

const post = {
    username: "Hemanta1611",
    content: "This is my #firstpost",
    likes: 150,
    reposts: 5,
    tags: ["@pandu", "@gandu"]
};


// get values
console.log(post.username);
console.log(post['username']);


// js convert all the key to string
const abc = {
    1: "a",
    2: "b",
    null: "c",
    true: "d",
    undefined: "3"
};


// object of objects AND objects are acting as key
const classInfo = {
    ankit: {
        grade: "A",
        city: "Gunupur"
    },
    farhan: {
        grade: "B",
        city: "Gunupur"
    },
    rahul: {
        grade: "C",
        city: "Gunupur"
    },
};
// clsssInfo.ankit.grade


// Array of Objects:
const classInfos = [
    {
        name: "ankit",
        grade: "A",
        city: "Gunupur"
    },
    {
        name: "Farhan",
        grade: "B",
        city: "Gunupur"
    },
    {
        name: "Rahul",
        grade: "C",
        city: "Gunupur"
    },
]


// Math Object:
console.log(Math.PI,"   ", Math.E);
console.log(Math.abs(-12.4),"   ", Math.floor(12.99), "  ", Math.floor(-5.01));
console.log(Math.ceil(12.99), "  ", Math.ceil(-5.01))
console.log("Random number beween 0 to 1: ", Math.random())




