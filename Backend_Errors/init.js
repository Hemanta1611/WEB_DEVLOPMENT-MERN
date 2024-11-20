import mongoose from "mongoose";
import {Chat} from "./models/chat.js";

main()
    .then((res) => {
        console.log("connection successful");
    })
    .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/FakeWhatsapp');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

// let chat1 = new Chat({
//     from: "Hemanta",
//     to: "Sameer",
//     msg: "Start doing the project",
//     created_at: new Date(),
// });

// chat1.save()
//     .then((res) =>{
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err);
//     });

let allChats = [
    {
        from: "Neha",
        to: "Preeti",
        msg: "Send me notes for the exam",
        created_at: new Date(),
    },
    {
        from: "Vardhan",
        to: "Sandeep",
        msg: "Help me in solving a problem",
        created_at: new Date(),
    },
    {
        from: "Dinesh",
        to: "Saurabh",
        msg: "How are you?",
        created_at: new Date(),
    },
    {
        from: "Dinesh",
        to: "Vardhan",
        msg: "Kota Kota Vardhan, lets go",
        created_at: new Date(),
    },
    {
        from: "Sandeep",
        to: "Warden",
        msg: "How are you my darling",
        created_at: new Date(),
    },
    {
        from: "Warden",
        to: "Sandeep",
        msg: "I am fine darling",
        created_at: new Date(),
    },
]

Chat.insertMany(allChats);


