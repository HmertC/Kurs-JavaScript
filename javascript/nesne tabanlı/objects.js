// let val; 

// let num =10;
// //object litaral
// let cabbar = {
//     name: 'cabbar',
//     ybirth:2002,
//     job:'student'
// }
// //array
// let numbers = [10,20,30];


// val = num;
// val=cabbar;
// val = numbers;

// console.log(val);
// console.log(typeof val);

//Constructor

// let cabbar ={
//     name :'cabbar',
//     ybirth:2001,
//     job:'student'
// }

// function Person(name,ybirth,job){
//     this.name = name;
//     this.ybirth = ybirth;
//     this.job = job;
//     this.calculateAge = function(){
//         return 2022 - this.ybirth;
//     }  
// }


let Person = function(name,ybirth,job){
    this.name = name;
        this.ybirth = ybirth;
        this.job = job;
        this.calculateAge = function(){
            return 2022 - this.ybirth;
        }  
}

let cabbar = new Person('cabbar',2001,'student');
let rezzak = new Person('rezzak',1990,'police');

console.log(cabbar.name);
console.log(cabbar.ybirth);
console.log(cabbar.job);
console.log(cabbar.calculateAge());

console.log('****************');

console.log(rezzak.name);
console.log(rezzak.ybirth);
console.log(rezzak.job);
console.log(rezzak.calculateAge());