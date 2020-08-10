let a = 20;
let b = 30;
function compare(a, b) {
    if (a < 0 && b < 0)
        console.log("please provide valid values");
    else if (a > b)
        console.log("a is greater than b");
    else
        console.log("b is greater than a");
}
compare(a, b); // b is greaterthan a



function AssignOperator(a, b) {
    console.log(typeof (a),a); //number 10
    console.log(typeof (b),b);// string 10
    if (a == b)
        console.log("a & b are equal by values");
    if (a === b)
        console.log("a & b are equal by values and type");
}
AssignOperator(10, '10'); // a & b are equal by values
AssignOperator(20, 20);// a & b are equal by values , & b are equal by values and type