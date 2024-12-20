//const tinderuser = new Object()
const tinderuser={}

tinderuser.id="123abc"
tinderuser.name="Sammy"

//console.log(tinderuser);

const regularuser={
    email: "some@gmail.com",
    fullname:{
        userfullname:{
            fname:"mrinalini",
            lname:"bhattacharjee"
        }
    }
}

//console.log(regularuser["fullname"])

const obj1={1: "a", 2: "b"}
const obj2={3: "c", 4: "d"}

//const obj3={obj1, obj2} //object k andar object

const obj3=Object.assign(obj1, obj2);
console.log(obj3)

const obj4={...obj1,...obj2}
console.log(obj4)

console.log(Object.keys(tinderuser))