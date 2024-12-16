//Date: Single moment from Jan 1 1970

let myDate=new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

let NewDate=new Date(2023, 0, 23)//("01-14-2023")
console.log(NewDate.toDateString());
console.log(NewDate.toLocaleString());

console.log(NewDate.getMonth());