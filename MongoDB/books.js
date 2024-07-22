const mongoose = require("mongoose");

main()
    .then((res) => {
        console.log("connection successful");
    })
    .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/amazon');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}


// Schema Validation: Basically Rules for Schema, just like we define constraints in sql
const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        maxLength: 30,
    },
    author: {
        type: String,
    },
    price: {
        type: Number,
        min: 1,
    },
    discount: {
        type: Number,
        default: 0,
    },
});

/* 
--IMP: all the rules/constraints are works when we insert values, it won't work when we update values.
       to follow the rules we can add command in update function as: {runValidators: true}
*/

const Book = mongoose.model("Book", bookSchema);

// let book1 = new Book({
//     title: "Mathematics II",
//     author: "RD Sharma",
//     price: 700,
// });

// let book1 = new Book({
//     title: "Gone Girl",
//     price: 700,
// });

book1.save()
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    })


