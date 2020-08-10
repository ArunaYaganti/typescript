var mystr = "      I am angular        aaa";
console.log(mystr.trim());

var mystr = "welcome";
console.log("split:" + mystr.split(''));//splits on each character
var mystr1 = "welcome,aaa,bbb,ccc";
console.log("split:" + mystr1.split(','));//splits on special character ','

//methods on arrays[delete]
var myarray = ['abc', 'xyz', 'pqr', 10];
//delete
delete myarray[3];
console.log(myarray);


