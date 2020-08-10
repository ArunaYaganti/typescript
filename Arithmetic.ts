//regular function declaration
function add(a:number, b:number):number {
    return a + b;
}
console.log(add(10, 20)); //30

//ECMA6 function declaration 
//fat arrow method declaration
let sub=(a: number, b: number) :number=> {
    return a - b;
}
console.log(sub(20, 10)); //10

//fat arrow method declaration , if only one statement is present no need of braces,return statemnt is optional
let Multiply=(a: number, b: number): number=> a * b;

console.log(Multiply(20, 10)); //200