//classes

// ES5

// var PersonES5 = function(name,job,ybirth) {
//     this.name = name;
//     this.job = job ;
//     this.ybirth = ybirth;
// }

// PersonES5.prototype.calculateAge =function() {
//     return 2022 - this.ybirth;
// }

// var cabbar = new PersonES5('cabbar','student',2011);
// console.log(cabbar.calculateAge());
// console.log(cabbar);

// // ES6


// class PersonES6{
//     constructor(name,job,ybirth){
//         this.name =name;
//         this.job = job;
//         this.ybirth=ybirth;
//     }

//     calculateAge(){
//         return 2022 - this.ybirth;
//     }
// }

// let rezzak = new PersonES6('rezzak','enginer ', 1990);
// console.log(rezzak.calculateAge());
// console.log(rezzak);


//Static Methods

// class PersonES6{
//     constructor(name,job,ybirth){
//         this.name =name;
//         this.job = job;
//         this.ybirth=ybirth;
//     }

//     calculateAge(){
//         return 2022 - this.ybirth;
//    }

//    static sayHi(){
//        console.log('Hello there');
//    }

// }

// let rezzak = new PersonES6('rezzak','enginer ', 1990);
// console.log(rezzak.calculateAge());
// console.log(rezzak);
// PersonES6.sayHi();




class Point{
    constructor(x,y){
        this.x = x;
        this.y =y;
    }

    static distance(a,b){
        const dx = a.x - b.x;
        const dy = a.y - b.y;

        return Math.hypot(dx,dy);
    }

}

const d1 = new Point(10,10);
const d2 = new Point(20,20);

console.log(Point.distance(d1,d2));