//Array in ES6 

const boxes = document.querySelectorAll('.box');

//ES5
let boxesES5 = Array.prototype.slice.call(boxes);

// boxesES5.forEach(function(box) {
//     box.style.backgroundColor ='green';
// } );

// //ES6
// Array.from(boxes).forEach(box => box.style.backgroundColor='green');


//ES5
// for (let i=0; i<boxesES5.length;i++){
//     if(boxesES5[i].className=='box blue'){
//         continue;
//     }
//     boxesES5[i].textContent = "I m changed";
//     boxesES5[i].style.backgroundColor ='blue';
// }

//ES6 
var boxesES6 = Array.from(boxes);

for(let box of boxesES6){
    if(box.className =='box blue'){
        continue;
    }
    box.textContent='I m changed';
    box.style.backgroundColor='blue';
}

//from 

//let arr =Array.from('Lamborgini Aventador');

const products = [
    {name : 'Samsung Ericson', price : 2050},
    {name : 'Iphone bes', price : 5550},
    {name : 'Oppo hoppo', price : 1150}
]

console.log(Array.from(products,prd => prd.name=='Samsung Ericson'));
console.log(products.find(prd => prd.name=='Samsung Ericson'));
console.log(products.filter(prd => prd.name=='Samsung Ericson'));

console.log(products.findIndex(prd => prd.price ==1150));

let numbers =['a', 'b', 'c'];

let entries = numbers.entries();

for(let i of entries){
    console.log(i);
}

let keys = numbers.keys();

for(let i of keys){
    console.log(i);
}

let values = numbers.values();

for(let i of values){
    console.log(i);
}