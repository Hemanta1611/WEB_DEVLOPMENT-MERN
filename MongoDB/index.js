const mongoose = require("mongoose");

// mongoose.connect('mongodb://127.0.0.1:27017/test');

main()
    .then((res) => {
        console.log("connection successful");
    })
    .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}


const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
});

const User = mongoose.model("User", userSchema);
// const Employee = mongoose.model("Employee", userSchema);

// const user1 = new User({
//     name: "Adam",
//     email: "adam@yahoo.com",
//     age: 48
// });

// user1.save();

// const user2 = new User({
//     name: "Eve",
//     email: "eve@yahoo.com",
//     age: 40
// });

// user2.save()
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err);
//     });


// User.insertMany([
//     {name: "Tony", email: "tony@gmail.com", age: 50},
//     {name: "Peter", email: "peter@gmail.com", age: 50},
//     {name: "Bruce", email: "bruce@gmail.com", age: 45},
// ]).then((res) => {
//     console.log(res);
// } )


// Mongoose Queries are not promises, but still they have a .then()  just like when some return promise and we can use .then()
// User.find({})
// User.find({age: {$gt: 47}})
//     .then((res) =>{
//         console.log(res);
//     })
//     .catch((err) =>{
//         console.log(err);
//     });


// User.updateOne({name : "Bruce"}, {email: "bruce@gmail.com"})
//     .then((res) =>{
//         console.log(res);
//     })
//     .catch((err) =>{
//         console.log(err);
//     })


// User.updateMany({age: {$gt: 45}}, {age: 55})
//     .then((res) =>{
//         console.log(res);
//     })
//     .catch((err) =>{
//         console.log(err);
//     })


// to see the data that will update
// User.findOneAndUpdate({name : "Bruce"}, {age: 41}, {new: true}) // {new: false} -> by default and will show old values/data
// // {new: true} -> it will help to see the updated data
//     .then((res) =>{
//         console.log(res);
//     })
//     .catch((err) =>{
//         console.log(err);
//     })


// User.deleteMany({age: 55})
//     .then((res) => {
//         console.log(res);
//     })

// User.deleteOne({name: "Bruce"})
//     .then((res) => {
//         console.log(res);
//     })

