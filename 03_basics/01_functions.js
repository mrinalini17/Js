/*function sayName(){
    console.log("M");
}

sayName()     //execution*/

function add( number1, number2){  //parameters
    console.log(number1 + number2);
}

add(3, 4) //arguments
add(3, "4")

//return k baad function kaam nahi karta

function login(username){
    if(username===undefined){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

console.log(login("Mrinalini")) //kuch nahi pass kia tho undefined print hoga

function calculateprice(...num1){ // rest operator
    return num1
}

//console.log(calculateprice(200, 500))  200 print hoga

console.log(calculateprice(200, 500))