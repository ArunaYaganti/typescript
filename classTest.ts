class Person {
    fname: string;
    lname: string;
    dob: string;
    constructor(_fname, _lname, _dob) {
    this.fname = _fname;
    this.lname = _lname;
    this.dob = _dob;
}
getDetails() {
    return "in parent class fname:" + this.fname + ",in parent class lname:" + this.lname + ",in parent class dob:" + this.dob;
}
}
class Student extends Person {
    studentId: number;
    constructor(_fname: string, _lname: string, _dob: string, _studentId: number) {
        super(_fname, _lname, _dob);
        this.studentId = _studentId;
    }
    getDetails() {
        return "in child class fname:" + this.fname + " ,child class lname:" + this.lname + " ,child class dob:" + this.dob + ",child class studentId:" + this.studentId;
    }
    getDefaultMsg() {
        return super.getDetails();
    }
}
var p1 = new Student("abc", "pqr", "10/10/2020", 12);
console.log(p1.getDetails()); //child class method
console.log(p1.getDefaultMsg()); // it inturns calls parent class method
