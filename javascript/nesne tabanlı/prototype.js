// prototype

let Person = function(name,ybirth,job){
    this.name = name;
    this.ybirth = ybirth;
    this.job = job;
    
} 

Person.prototype.calculateAge = function(){
    return 2022 - this.ybirth;
  }

  Person.prototype.getName = function(){
      return this.name;
  }

  Person.prototype.fullName='cltkn';
let cabbar = new Person('cabbar',1990,'teacher');
let rezzak = new Person('rezzak',2012,'student');

console.log(cabbar.calculateAge());
console.log(cabbar);
console.log(cabbar.getName());
console.log('**************');
console.log(rezzak.calculateAge());
console.log(rezzak);
console.log(rezzak.getName());

console.log(cabbar.hasOwnProperty('fullName'))
console.log(cabbar.fullName);
