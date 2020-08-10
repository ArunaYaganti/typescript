var a1 = 10;
var b1 = '10';
function sample1() {
	console.log(typeof (this.a1 + this.b1));//number
	console.log(this.a1 + this.b1); // NAN
}
//sample1();
var a2: number = 20;
var b2: string = '20';

function sample2(a2,b2) {
	console.log(typeof (a2 + b2)); //string
	console.log(a2 + b2); // 2020
}
//sample2(a2, b2);

var ab: 3 = 3;
//console.log(typeof (ab)); //number
//console.log(ab); // 3
//ab = 4; // type '4' is not assignable to type '3'
//console.log(ab); 

//function sample(a)  //general way of creating function
function sample(a:number):number|null // to avoid errors,clear way of specifying return type 
{
	if (a > 0)
		return 10 * a;
	else
		return null;

}
//console.log(typeof(sample(10))); //number
//console.log(typeof (sample(-1))); // object
//console.log(sample(10)); //100
//console.log(sample(-1)); //null

var x = 4;
var y = -x; // negation operator
//console.log(x);  //4
//console.log(y);  //-4

var z = -2;
var result = z > 0 ? "possitive" : "negative"; //conditional operator
//console.log(result); //negative

