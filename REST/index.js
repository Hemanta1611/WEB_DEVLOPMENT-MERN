const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const {v4: uuidv4} = require('uuid');  // to give unique id to new post
/* html can't perform delete, update, patch, -- it can only perform get and post,
to perform all this things we install "method-override" package */
var methodOverride = require('method-override');
app.use(methodOverride('_method'));

app.use(express.urlencoded({extended: true})); // to understand the data submitted by client side

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));


let posts = [
    {
        id: uuidv4(),
        username: "apnacollege",
        content: "I love coding",
    },
    {
        id: uuidv4(),
        username: "Hemanta",
        content: "To have good chances of success we need hard work learn smart work",
    },
    {
        id: uuidv4(),
        username: "Kshyeeru",
        content: "I am a medical student in burla",
    },
];

// app.get("/", (req, res) => {
//     res.send("server working well!");
// })

// creating 1st api: -- index route --
app.get("/posts", (req, res) => {
    // res.send("server working");
    res.render("index.ejs", {posts});
});

// creating 2nd api: -- create route --
// we need to create 2 route:
app.get("/posts/new", (req, res) => {
    res.render("new.ejs");
});
app.post("/posts", (req, res) => {
    // console.log(req.body);
    let {username, content} = req.body;
    let id = uuidv4();
    posts.push({id, username, content}); // to add post from "form" to posts array
    // res.send("post request working");
    // after post submit, to redirect to main page we can use "redirect method"
    res.redirect("/posts");
});

// creating 3rd api: -- show route --
app.get("/posts/:id", (req, res) => {
    let {id} = req.params;
    // console.log(id);
    let post = posts.find((p) => id === p.id);
    // console.log(post);
    res.render("show.ejs", {post});
    // res.send("request working");
});


// creating 4th api: -- update route -- // this is for checking in hoppscotch
app.patch("/posts/:id", (req, res) => {
    let {id} = req.params;
    // console.log(id);
    let newContent = req.body.content;
    // console.log(newContent);

    let post = posts.find((p) => id === p.id);
    post.content = newContent;
    console.log(post);
    // res.send("patch request working");
    res.redirect("/posts");
});

// creating 4th api -- update route --
app.get("/posts/:id/edit", (req, res) => {
    let {id} = req.params;
    let post = posts.find((p) => id === p.id);
    res.render("edit.ejs", {post});
})

// creating 5th api -- delete route --
app.delete("/posts/:id", (req, res) => {
    let {id} = req.params;
    posts = posts.filter((p) => id !== p.id);
    // res.send("delete success");
    res.redirect("/posts");
});


app.listen(port, ()=>{
    console.log(`Listening on port ${port}`);
});


