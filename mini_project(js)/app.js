// let div = document.querySelector("div");
// let ul = document.querySelector("ul");
// let lis = document.querySelectorAll("li");

// div.addEventListener("click", function(){
//     console.log("div was clicked");
// });

// ul.addEventListener("click", function(event){
//     event.stopPropagation(); // help prventing to trigger the outer element (i.e. parent element)
//     console.log("ul was clicked");
// });

// for(li of lis){
//     li.addEventListener("click", function(event){
//         event.stopPropagation(); // stop event bubbling
//         console.log("li was clicked");
//     });
// }



// Todo App
let inp = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");
// let li = document.querySelector("li");

btn.addEventListener("click", function(){
    let text = inp.value;
    let newList = document.createElement("li");
    newList.innerHTML = text + "&nbsp; &nbsp;";
    ul.appendChild(newList);
    
    let delbtn = document.createElement("button");
    delbtn.innerHTML = "x";
    delbtn.classList.add("delete");
    newList.appendChild(delbtn);

    // delbtn.addEventListener("click", function(){
    //     this.parentElement.remove();
    // })
    
    inp.value = ""; // to clear the input placeholder/value after once submit a task
});

// let delbtns = document.querySelectorAll(".delete")
// for(delbtn of delbtns){
//     delbtn.addEventListener("click", function(){
//         let parent = this.parentElement;
//         parent.remove();
//     });
// }

// event delegation
ul.addEventListener("click", function(event){
    // console.log(event.target.nodeName);
    // console.log("button clicked");
    if(event.target.nodeName == "BUTTON"){
        let listItem = event.target.parentElement;
        // console.log(listItem);
        listItem.remove();
    }
});

