// Prototypal Inherit
let Person = function(name,ybirth,job){
    this.name = name;
    this.ybirth = ybirth;
    this.job = job;
}

Person.prototype.calculateAge = function(){
    return 2022 - this.ybirth;
}

let Teacher = function(name,ybirth,job,subject){
    Person.call(this,name,ybirth,job);
    this.subject = subject;
}

//Inherit the person prototype methods
Teacher.prototype = Object.create(Person.prototype);

//set teacher constructor
Teacher.prototype.constructor = Teacher;

Teacher.prototype.greeting  = function(){
    return 'hello my name is '+this.name;
}


let cabbar = new Teacher('cabbar', 1995, 'teacher', 'math');

console.log(cabbar);
console.log(cabbar.calculateAge());