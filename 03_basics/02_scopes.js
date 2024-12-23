let a=10
const b=20
var c=30

if (true){
    let a=10
    const b=20
    var c=30
}

console.log(a); //not printed
console.log(b); //not printed
console.log(c); //will be printed

/*Scope
var:

Function-scoped: A variable declared with var is available throughout the entire function in which it is declared, or globally if declared outside a function.
It does not respect block scope, meaning it will "leak" outside {} blocks like if, for, etc.
let:

Block-scoped: A variable declared with let is confined to the block {} where it is defined*/


