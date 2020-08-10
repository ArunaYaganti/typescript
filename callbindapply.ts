var obj = {
    num: 2
};

var myfun = function (a, b, c) {
    return this.num + a + b + c;
}

//call("call")
console.log("call");
console.log(myfun.call(obj, 1, 2, 3));

//apply
console.log("apply");
console.log(myfun.apply(obj, [4, 5, 6]));
var arr1 = [4, 5, 6];
console.log(myfun.apply(obj, arr1));

//bind
console.log("bind");
var newfun = myfun.bind(obj);
console.log(newfun(3, 4, 5));
