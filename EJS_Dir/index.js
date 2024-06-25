const express = require("express");
const app = express();
const path = require("path");

const port = 3000;

// to get the css, js files, we use default file ass "public" similar to views
app.use(express.static(path.join(__dirname, "public")));

// Using EJS:
app.set("view engine", "ejs");
// To run index.js and view the output from parent directory(web_dev) not from ejs directory then
app.set("views", path.join(__dirname, "/views")); 

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});


app.get("/", (req, res) => {
    res.render("home.ejs");
    // res.send("This is Home");
})


// Passing data to EJS (let say from database)
app.get("/rolldice", (req, res) => {
    let diceVal = Math.floor(Math.random() * 6) + 1; // let this random value came from database and stored in the variable "diceVal"
    // res.render("rolldice.ejs", {num: diceVal}); // num is key used to get diceVal value in ejs file
    res.render("rolldice.ejs", {diceVal}); // diceVal is directly used as key
});


app.get("/ig/:username", (req, res) => {
    // const followers = ["adam", "bob", "steve", "abc"];
    let {username} = req.params;
    // console.log(username);
    // res.render("instagram.ejs", {username, followers});

    const instaData = require("./data.json");
    // console.log(instaData);
    const data = instaData[username];
    // console.log(data);
    if(data){
        res.render("instagram.ejs", {data});
    } else{
        res.render("error.ejs");
    }
});




