//Loops in js
  //for loop
let sum = 0;
for(let i=1;i<=10;i++){
    sum  = sum + i;
}
    console.log("sum  = ", sum);
  //while loop
//q4
let gameNum = 25;
let userNum = prompt("Guess the number game : ");

while(userNum != gameNum) {
    userNum = prompt("you enter wrong num");
}
console.log("congo you entered the right num");
