import express from 'express';
const app = express();

// middleware
// 1st middleware:
/*
app.use((req, res) => {
    let {query} = req.query;
    console.log("query: ", query);
    console.log("Hi, I am a middleware");
    res.send("middleware end");
});
*/

// app.use((req, res, next) => {
//     console.log("Hi, I am 1st middleware");
//     next();
// });

// app.use((req, res, next) => {
//     console.log("Hi, I am 2nd middleware");
//     next();
// });


// Creating Utility Middleware
// app.use((req, res, next) => {
//     req.responseTime = new Date(Date.now()).toString();
//     console.log("request method: ", req.method, "\nrequest path:", req.path, "\nresponse time:", req.responseTime, "\nrequest hostname:", req.hostname);
//     next();
// });


app.use("/random", (req, res, next) => {
    console.log("I am middleware used for random page/path(i.e. /random/anything)");
    next();
});


// API Token as Query String: Let's create a middleware for an api that checks if the access token was 
// passed in the query string or not.
/*
app.use("/api", (req, res, next) => {
    let {token} = req.query;
    if(token === "giveaccess"){
        next();
    }else{
        res.send("Access denied");
    }
});
// verify using: http://localhost:3000/api?token=giveaccess and http://localhost:3000/api
app.get("/api", (req, res) => {
    res.send("data");
});
*/

// OR

// passing middlewares as function, we can pass multiple middlewares as function
const checkToken = (req, res, next) => {
    let {token} = req.query;
    if(token === "giveaccess"){
        next();
    }else{
        res.send("Access denied");
    }
};

app.get("/api", checkToken, (req, res) => {
    res.send("data");
});


app.get("/random", (req, res) => {
    res.send("This is a random page");
});


app.get("/", (req, res) => {
    res.send("Hi, I am root");
});

// if none of the path match then this will be executed
app.use((req, res) => {
    res.send("I am default middleware, \n   Page not Found!!");
});

app.listen(3000, () => {
    console.log("server listening to port 3000");
});
