import express from 'express';
const app = express();
import { ExpressError } from "./ExpressError.js";
import mongoose from 'mongoose';
import path from 'path';
import { Chat } from "./models/chat.js";
import methodOverride from 'method-override';

app.get("/err", (req, res) => {
    abcd = abcd;
});


app.get("/", (req, res) => {
    res.send("Hi, I am root");
});

const checkToken = (req, res, next) => {
    let { token } = req.query;
    if (token === "giveaccess") {
        next();
    }
    else {
        throw new ExpressError("Access Denied", 401);
    }
};

app.get("/api", checkToken, (req, res) => {
    console.log("accessed");
    res.send("data");
});

const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, "views")));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

main()
    .then((res) => {
        console.log("connection successful");
    })
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/FakeWhatsapp');

    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

// Index Route:
app.get("/chats", async (req, res) => {
    let chats = await Chat.find();
    // console.log(chats);
    // res.send("Working");
    res.render("index.ejs", { chats });
});

// New Route:
app.get("/chats/new", (req, res) => {
    // throw new ExpressError("Page not Found", 404);
    res.render("new.ejs");
});

// Create Route:
app.post("/chats", async (err, req, res, next) => {
    try {
        let { from, to, msg } = req.body;
        let newChat = new Chat({
            from: from,
            to: to,
            msg: msg,
            created_at: new Date()
        });
        await newChat.save();
        res.redirect("/chats");
    } catch (err) {
        // console.log(err);
        next(err);
    }
    // res.send("working");
});

// wrap async function 
function asyncWrap(fn){
    return function(req, res, next){
        fn(req, res, next).catch((err) => next(err));
    }
}

// Show Route:
app.get("/chats/:id", async (req, res, next) => {
    let { id } = req.params;
    let chat = await Chat.findById(id);
    if (!chat) {
        next(new ExpressError("Chat not found", 404)); // we have to use next() to pass error to error handler in asynchronus function
    }
    res.render("edit.ejs", { chat });
});

// Edit Route:
app.get("/chats/:id/edit", async (req, res) => {
    let { id } = req.params;
    let chat = await Chat.findById(id);
    res.render("edit.ejs", { chat });
});

// Update Route:
app.put("/chats/:id", async (req, res) => {
    let { id } = req.params;
    let { msg: newMsg } = req.body;
    let updatedChat = await Chat.findByIdAndUpdate(id, { msg: newMsg }, { runValidators: true, new: true });
    // console.log(updatedChat);
    res.redirect("/chats");
});

// Delete Route:
app.delete("/chats/:id", async (req, res) => {
    let { id } = req.params;
    let deletedChat = await Chat.findByIdAndDelete(id);
    console.log(deletedChat);
    res.redirect("/chats");
});

app.use((err, req, res, next) => {
    // console.log("-----ERROR-----");
    // next();
    let { status, message = "Something went wrong" } = err;

    res.status(status).send(message);
});


// handling mongoose error
app.use((err, req, res, next) => {
    let { status, message = "Something went wrong" } = err;
    res.status(status).send(message);
});

app.listen(3000, () => {
    console.log("server listening to port 3000");
});
