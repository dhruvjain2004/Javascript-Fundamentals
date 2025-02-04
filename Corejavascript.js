//variables in js
fullname = "dhruvjain"
let age = 20;
roll_num = 18;
console.log(fullname);
console.log(age);
console.log(roll_num);
let age1 = 26;
console.log(age1);
const b = 89;
console.log(b);

//Data types in js
fullname = "dhruvjain"
console.log(fullname);
typeof(fullname);
let student = {
    sname : "rohan",
    age : 19,
    cgpa : 9.1,
    ispass : true
};
for (let key in student) {
    console.log("key", key, "value",student[key]); 
}
//q1
const profile = {
    username : "dhruvjain",
    isfollow : false,
    followers : 200,
    following : 180
};
//Operators in js
let a = 2;
let c = 5;
console.log(a+c);
console.log(a-c);
console.log(a*c);
console.log(a/c);
console.log(a**c);
console.log(a==c);
let ag = 16;
ag>=18 ? "adult" : "not adult";
console.log(ag);
//conditional statements
//q2
  let num = prompt("Enter a number:");
if(num % 5 === 0) {
    console.log(num , " is multiple of 5");
} else{
    console.log(num, " is NOT a multiple of 5");
}
//q3
let score = 85;
let grade;

if(score >= 90 && score<=100){
    grade = "A";
} else if (score >= 70 && score<=89) {
    grade = "B";
} else if (score >= 60 && score<=69) {
    grade = "C";
} else if (score >= 50 && score<=59) {
    grade = "D";
} else if(score >= 0 && score<=49) {
    grade = "F";
}
console.log("According to your scores , your grade is :", grade);
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
