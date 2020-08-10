var person1 = {
    name: 'aaa',
    age: 20
};
var person2 = {
    name: 'bbb',
    age: 30
};
function printdetails() {
    console.log("name is " + this.name + " age is " + this.age);
}
function add(a, b, c) {
    console.log(a + b + c);
}
//call

//binding printdetails,add methods to person1 object using call
printdetails.call(person1); 
add.call(person1, 1, 2, 3);
//binding printdetails, add methods to person2 object using call
printdetails.call(person2);
add.call(person2, 4, 5, 6);

//apply

//binding printdetails, add methods to person1 object using apply
printdetails.apply(person1);
add.apply(person1, [1, 2, 3]);
//binding printdetails,add methods to person2 object using apply
printdetails.apply(person2);
add.apply(person2, [4, 5, 6]);

//bind

//binding printdetails, add methods to person1 object using bind
var newp11 = printdetails.bind(person1);
newp11();
var newp12 = add.bind(person1);
newp12(1, 2, 3);

//binding printdetails,add methods to person2 object using bind
var newp21 = printdetails.bind(person2);
newp21();
var newp22 = add.bind(person2);
newp22(4, 5, 6);





