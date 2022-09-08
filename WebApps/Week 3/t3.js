const now = new Date(Date.now());
console.log('the current time is');
console.log(now.toDateString());

const today = new Date();

//const birthday = new Date('March 04 2003 03:24:00');

//const birthday = new Date('2003-03-04T03:24:00');

//const birthday = new Date(2003, 03, 04);
//const birthday = new Date(2003, 04, 04, 3, 24, 0)
//const birthday = new Date (6280218000000)

console.log(now.getDay());
console.log(now.getDate());
console.log(now.getMonth());
console.log(now.getFullYear());

now.setFullYear(2022);
console.log(now.getFullYear());

now.setDate(10);
console.log(now.getDate());
let newDate = new Date();
setTimeout(() => {
    newDate = Date.now();
    console.log(newdate - now);
}, 1000);