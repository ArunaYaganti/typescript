const person = {
    age: 21,
    name: 'aaaa',
    getPersonDetails: function(){
        return "my name is :" + this.name + " age is:" + this.age;

    }
}
console.log(person.getPersonDetails());//my name is : aaaa age is: 21

const instanceofPerson = person.getPersonDetails;
console.log(instanceofPerson());//my name is : undefined age is : undefined
const secondinstanceofperson = instanceofPerson.bind(person);
console.log(secondinstanceofperson());//my name is : aaaa age is: 21

//function Person2(age, name) {
//    this.age = age;
//    this.name = name;
//}
//const abc = new Person2(10, 'abc');
//console.log(abc instanceof Person2);//true

