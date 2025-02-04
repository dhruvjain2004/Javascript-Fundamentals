//DOM
let heading = document.getElementById("heading");
console.dir(heading);

let headings = document.getElementsByClassName("heading by class");
console.dir(headings);
console.log(headings);

let para = document.getElementsByTagName("p");
console.dir(para);

let firstel = document.querySelector("p");
console.dir(firstel);
//q1
let h2 = document.querySelector("h2");
console.dir(h2.innerText);

h2.innerText = h2.innerText + " from dhruv jain";
//q2
let divs = document.querySelectorAll(".box");
divs[0].innerText = "new unique value 1";
divs[1].innerText = "new unique value 2";
divs[2].innerText = "new unique value 3";

let newbtn = document.createElement("button");
newbtn.innerText = "click me";
console.log(newbtn);

let div = document.querySelector("div");
div.append(newbtn);

let para = document.querySelector("p");
para.remove();
//q3
let newbtn = document.createElement("button");
newbtn.innerText = "click me";

newbtn.style.color = "white";
newbtn.style.backgroundColor = "red";

document.querySelector("body").prepend(newbtn);

let modebtn = document.querySelector("#mode");
let body = document.querySelector("body");
let currmode = "light";

modebtn.addEventListener("click",() => {
    if(currmode === "light") {
        currmode = "dark";
        body.classList.add("dark");
    } else {
        currmode = "light"; 
        body.classList.add("light");
        
    }
    console.log(currmode);
});
