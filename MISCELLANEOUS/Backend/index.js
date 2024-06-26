const express = require("express");
const app = express();
const port = 3000;

app.get("/register", (req, res) => {
    let {user, pass} = req.query;
    res.send(`Standard GET response, Welcome ${user}!`);
});
/*
Handling Post Request:
--> Set up post request route to get some response
--> Parse post request data
*/
app.use(express.urlencoded({extended: true}));
app.use(express.json()); // to able to read json data

app.post("/register", (req, res) => {
    let {user, pass} = req.body;
    res.send(`Standard POST response, Welcome ${user}!`);
});

app.listen(port, () =>{
    console.log(`listening to port ${port}`);
})
