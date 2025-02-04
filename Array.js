//Array in js
let marks = [20,30,40,50];
for(let i=0;i<marks.length;i++){
    console.log(marks[i]);
}
//q6
let marks1 = [20,30,40,50];
let sum = 0;
for(let val of marks1){
    sum+=val;
}
let avg = sum/(marks1.length);
console.log('avg marks of class is =',avg);
Array.push()
Array.pop()
toString()
concat()
unshift()
shift()
slice()
splice()
