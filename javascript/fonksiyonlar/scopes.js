// scopes

// Global scopes
var name = 'cabbar';
var age = 25;

function logName(){
    var name = 'rezzak';
    var age = '12'
    console.log('function scope',name,age);
}

if(true){
    var age = 30;
    console.log('block scope',name,age);
}
console.log(age);

logName();
console.log(name);


//Local Scopes

// fonksiyonlar kendi scoplarını oluşturur 
// blocklar yeni scop oluşturmaz
//ES6 iile gelen const block scope oluşturur

console.log('**************');

if(true){
    var model = 'audi';
    let year = 2016;
    const color = 'black';
    console.log('block scope',model,year,color);
}
console.log('block scope',model,year,color);
console.log(model);
// console.log(year);

var i = 1;

for(let i=0;i<10;i++){
    console.log('i',i);
}
console.log(i);