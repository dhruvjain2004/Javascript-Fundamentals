//Function in js
function sum(x,y){
    s = x+y;
    console.log("before return");
    return s;
}
let val =sum(5,6);
console.log(val);
  //arrow functions
   function sum (a,b){
    return a+b;
   }
   const arrowSum = (a,b) => {
    console.log(a+b);
   };
//map method
let nums = [67,52,78];
let newArr = nums.map((val) => {
    return val*val;
})
let calSquare = (num) => {
    console.log(num*num);
   };
   nums.forEach(calSquare);
//filer method
   let arr = [1,2,3,4,5,6,7];
   let evenArr = arr.filter((val) => {
    return val>3;
   });
   console.log(evenArr);
//reduce method
let arr1 = [1,2,3,4,5,6,7];
const output = arr.reduce((prev,curr) => {
    return prev < curr ? prev : curr;
});

console.log(output);
