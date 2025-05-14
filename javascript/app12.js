/* 
async: makes a function return a promise: function giving promise
await: makes a function wait for a promise: function taking/waiting for promise
     : await keyword can only be used inside an async function.
     : it makes the function pause the execution and wait for a resolved promise before it continues


API: application programming interface
--> API returns data from server in the form of JSON.
--> API is url, link or endpoint
--> 


JSON: JavaScript Object Notation
Accessing Data from JSON:
. JSON.parse(data) method to parse a string data into a js object
. JSON.stringify(json) method to parse a js object data into json


Ajax: Asynchronous JavaScript and XML


Status Code:
200 - OK
404 - NOT FOUND
400 - BAD REQUEST
500 - INTERNAL SERVER ERROR
--> 
*/

// let jsonRandom = '{"fact":"A cat almost never meows at another cat, mostly just humans. Cats typically will spit, purr, and hiss at other cats.","length":116}';

// console.log(jsonRandom);
// console.log(jsonRandom.fact);

// let jsonValide = JSON.parse(jsonRandom);
// console.log(jsonValide);
// console.log(jsonValide.fact);

let url = "https://catfact.ninja/fact";

/* 
fetch(url)
    .then((response) => {
        console.log(response);
        // console.log(response.json());
        // response.json().then((data) => {
        //     console.log(data);
        // })
        return response.json();
    })
    .then((data) => {
        console.log("data 1: ", data.fact); // lets say we want again to send request then-->
        return fetch(url); 
    })
    .then((res) => {
        return res.json();
    })
    .then((data2) => {
        console.log("data 2: ", data2.fact);
    })
    .catch((err) => {
        console.log(err);
    })

*/

/*
async function getFacts(){
    try{
        let res = await fetch(url);
        let data = await res.json();
        console.log(data);
        console.log(data.fact);

        let res2 = await fetch(url);
        let data2 = await res2.json();
        console.log(data2.fact);
    } catch(e){
        console.log("error - ", e);
    }
    
    }
    */
   
   
   // Axios : library to make http request
   
   
async function getFacts(){
    try{
       let res = await axios.get(url); // it will directly take as json data
    //    console.log(res.data.fact);
        return res.data.fact;
   } catch(e){
       console.log("error - ", e);
       return "NO Fact Found";
   }

}

let btn = document.querySelector("button");

btn.addEventListener("click", async() => {
    let fact = await getFacts();
    // console.log(fact);

    let p = document.querySelector("#result");
    p.innerText = fact;
})


// Updating Query String:

let url2 = "http://universities.hipolabs.com/search?name=";
let btn2 = document.querySelector("#clgSearch");
let p2  = document.querySelector("#result2");

// let countryName = "nepal";

btn2.addEventListener("click", async() =>{
    let countryName = document.querySelector("input").value;
    console.log(countryName);
    let clgDetails = await getColleges(countryName);
    // console.log(clgDetails);

    showClg(clgDetails);
    document.querySelector("input").value = "";
});

async function getColleges(countryName){
    try{
        let res = await axios.get(url2 + countryName);
        // console.log(res.data);
        return res.data;
    }catch(err){
        // console.log("error - ", err);
        return [];
    }
}

function showClg(clgDetails){
    let list = document.querySelector("#result2");
    list.innerText = "";

    for(col of clgDetails){
        console.log(col.name);
        let li = document.createElement("li");
        li.innerText = col.name;
        list.appendChild(li);
    }
}