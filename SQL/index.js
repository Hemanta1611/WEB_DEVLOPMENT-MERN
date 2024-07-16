const { faker } = require("@faker-js/faker");
const mysql = require("mysql2");
const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require("method-override");
const { resourceLimits } = require("worker_threads");

app.use(methodOverride("_method"));
app.use(express.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

/* to run mysql on CLI, use command: mysql -u root -p */
const connection = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  database: "delta_app",
  password: "#Hemanta1611",
  port: 3306,
});

// to insert in bulk using faker:
let getRandomUser = () => {
    return [
      faker.string.uuid(),
      faker.internet.userName(),
      faker.internet.email(),
      faker.internet.password(),
    ]
};

app.listen("3000", () => {
  console.log("server is listening to port 3000");
});

app.get("/", (req, res) => {
  // res.send("Welcome to home page");
  let q = "SELECT count(*) FROM user";
  try {
      connection.query(q, (err, result) => {
        if (err) throw err;
        // console.log(result[0]);
        // res.send(result[0]);
        let count = result[0]["count(*)"];
        res.render("home.ejs", {count});
      });
    } catch (err) {
      console.log(err);
      res.send("Some error in database");
    }
    
    // connection.end(); no need to use coz it will autometically end when "/" end
});


// Show Route
app.get("/user", (req, res) =>{
  let q = "select id, username, email from user";
  try {
      connection.query(q, (err, users) => {
        if (err) throw err;
        res.render("showuser.ejs", {users});
      });
    } catch (err) {
      res.send("Some Error In DATABASE!")
    }
});

// Edit Route
app.get("/user/:id/edit", (req, res) =>{
  let {id} = req.params;
  let q = `select * from user where id = '${id}'`;
  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      // console.log(result);
      let user = result[0];
      res.render("edit.ejs", {user});
    });
  } catch (err) {
    res.send("Some Error In DATABASE!");
  }
});

// Update Route
app.patch("/user/:id", (req, res) =>{
  // res.send("updated");
  let {id} = req.params;
  let q = `select * from user where id = '${id}'`;
  let {password: formPassword, username: newUsername} = req.body;
  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      // console.log(result);
      let user = result[0];
      // res.send(user);
      if(formPassword != user.password){
        res.send("WRONG PASSWORD");
      }
      else{
        let q2 = `update user set username = '${newUsername}' where id = '${id}'`;
        connection.query(q2, (err, result) => {
          if (err) throw err;
          // res.send(result);
          res.redirect("/user");
        });
      }
    });
  } catch (err) {
    res.send("Some Error In DATABASE!");
  }
});

// let q = "show tables";

// let q = "insert into user (id, username, email, password) values (?, ?, ?, ?)";
// let user = ["123", "123_newuser", "abc@gmail.com", "abc"];

// let q = "insert into user (id, username, email, password) values ?";
// let users = [
    //   ["123b", "123_newuserb", "abc@gmail.comb", "abcb"],
    //   ["123c", "123_newuserc", "abc@gmail.comc", "abcc"],
    // ];

/*
let q = "insert into user (id, username, email, password) values ?";
let data = [];
for(let i = 1; i <= 100; i++){
    data.push(getRandomUser()); // 100 fake users data
}
*/

/*
try {
//   connection.query(q, user, (err, result) => {
//   connection.query(q, [users], (err, result) => {
  connection.query(q, [data], (err, result) => {
    if (err) throw err;
    console.log(result);
  });
} catch (err) {
  console.log(err);
}

connection.end(); */




// let getRandomUser = () => {
//   return {
//     id: faker.string.uuid(),
//     username: faker.internet.userName(),
//     email: faker.internet.email(),
//     password: faker.internet.password(),
//   };
// };

// console.log(getRandomUser());
