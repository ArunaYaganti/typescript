
type Cat = { name: string, purrs: boolean };
type Dog = { name: string, barks: boolean, wags: boolean };

//Union
type CatorDog = Cat | Dog;

let cc: CatorDog = {
    name: 'xyz',
    purrs: true,
    barks: false,
    wags:true
}
console.log(cc.name); // xyz //'name' we can access because it present in both cat ,dog types
//console.log(cc.purrs); //error // since 'purrs' doesnot exist in both types cat,dog -we can't access this property because of union type 'cc' object

//Intersection
type CatandDog = Cat & Dog;

let dd: CatandDog = {
    name: 'pqr',
    purrs: false,
    barks: true,
    wags:false
}
// we can access members of this  intersection type object 'dd' directly even though they are present or not in both cat,dog types
console.log(dd.purrs);// false
console.log(dd.name);//pqr
