enum daysofWeek { 'mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun' };
console.log(daysofWeek['mon']);
console.log(daysofWeek['tue']);
console.log(daysofWeek['wed']);
//set our own numbers 
enum monthsofyear { 'Jan' = 100, 'Feb', 'Mar' };
var currentMonth: monthsofyear = monthsofyear['Jan'];
if (currentMonth === 100) {
    console.log("month is January,index:" + currentMonth);
}