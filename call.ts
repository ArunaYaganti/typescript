var person1 = {
    name: 'aaa',
    age: 20
};
var person2 = {
    name: 'bbb',
    age: 30
};

function printname() {
    console.log(this.name);

}
function printAge() {
    console.log(this.age);

}
printname.call(person1);
printAge.call(person1);
printname.call(person2);
printAge.call(person2);