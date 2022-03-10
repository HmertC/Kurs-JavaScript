//Arrow functions

//ES%
let welcomeES5 = function() {
    console.log('Hello from ES5');
}

welcomeES5();

//ES5

let welcomeES6 =() => {
    console.log('hello ES6 ')
};

welcomeES6();

// with parameters 

//ES5
let multiplyES5 = function (x,y) {
    return x*y ; 
}
console.log(multiplyES5(10,5));

//ES6

// let multiplyES6 = (x,y) => { return x*y};
let multiplyES6 = (x,y) => x*y;

console.log(multiplyES6(5,6));

//ES5

let splitES5 = function(text) {
    return text.split(' ');
}

console.log(splitES5('Yaşa Fenerbahçe oley oley oley'));

//ES6 

let splitES6 = text => text.split(' ');

console.log(splitES6('Yaşa Fenerbahçe oley oley oley'));

//object literals 

//ES5 

let getproductES5 = function (id,name) {
    return {
        id : id,
        name : name
    }
}

console.log(getproductES5('1','Iphone 12 xs max'));

//ES6 

let getProductES6 = (id,name) => ({
    id : id,
    name : name
});

console.log(getProductES6('1','sony ericson galaxy'));

const phones = [
    {name : 'Iphone 22', price : 5000},
    {name : 'Iphone 36', price : 10000},
    {name : 'Iphone 76', price : 15000},
    {name : 'Iphone 69', price : 50000}
];

//ES5
let priceES5 = phones.map(function(phone) {
   return phone.price; 
});

console.log(priceES5);

//ES6

let priceES6 = phones.map(phone => phone.price);

console.log(priceES6);

//ES5

const arr = [1,2,3,4,6,8,55,22,84,33];

let evenES5 = arr.filter(function(a) {
    return a%2 ==0;
});

console.log(evenES5);

//ES6

let evenES6 = arr.filter(a =>a%2==0);

console.log(evenES6);

