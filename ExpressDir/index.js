/* 
--> This index.js file will act as server.

*/

const express = require("express");
const app = express();

// console.dir(app);
/*
--> Ports are the logical endpoints of a network connection that is used to exchange information between a web server
and a web client.

*/
const port = 3030;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// "use" used for all path having same response
// app.use((req, res) => {
//   console.log("request received");
  // res.send("This is a basic response");

  // res.send({
  //   fruit : "apple",
  //   color : "red",
  // });

  /* We can use send only one response at a time */

//   let code = "<h1> Fruits </h1> <ul><li>Apple</li><li>Orange</li></ul>";
//   res.send(code);
// });

/*
Routing:
--> it is a process of selecting a path for traffic in a network or between or across multiple networks.
--> / or /home = home page
*/

app.get('/', (req, res) => {
  let code = "<h1> Home Page </h1> <h3> Hello World !! </h3> <p> You contacted root path. </p>"
  res.send(code);
});

app.get('/apple', (req, res) => {
  res.send({
    name: "apple",
    color: "red",
  });
});

// if upper path match then it well & good, but let say none of the above path match then we can make custom response for other page
// app.get("*", (req, res) => {
//   res.send("This path does not exist");
// });

app.post("/", (req, res) =>{
  res.send("You sent a post request to root");
});


/* 
------- Path Parameters -------
--> let say we have crores of website pages for individual accounts, so for individual path we don't create individual path, we treat path as "variable"

*/

app.get("/:username/:id" , (req, res) => {  // "/" used for start from root and "username" is a variable & "id" is also a varible
  // console.log(req.params);
  let {username, id} = req.params;
  res.send(`welcome to the page of @${username}.`);
});


/* 
------- Query String -------

*/

app.get("/search", (req, res) => {
  // console.log(req.query);
  let { q } = req.query;
  if(!q){
    res.send(`<h3>Nothing Searched</h3>`);
  }
  res.send(`<h3>search result for query: ${q}</h3>`);
});

// localhost:3030/search?q="apple"&color=green


