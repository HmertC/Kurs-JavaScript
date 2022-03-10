// Functions

// function yasHesapla(dogumYili){
//    return 2018 - dogumYili;
// }

// let ageCabbar = yasHesapla(1983);
// let ageRezzak = yasHesapla(1990);
// let ageHaydar = yasHesapla(1955);

// console.log(ageCabbar);
// console.log(ageRezzak);
// console.log(ageHaydar);

// function EmekliOlma(dogumYili,isim){
//     let yas = yasHesapla(dogumYili);
//     let emeklilik = 65 - yas;

//     if(emeklilik>0){
//         console.log(`${isim} Emekli olmanıza ${emeklilik} yıl kaldı`);
//     }else{
//         console.log('emekli olmuşsunuz')
//     }

// }

// EmekliOlma(2010,'cabbar');
// EmekliOlma(2015,'rezzak');
// EmekliOlma(2008,'haydar');


// Function Declarations

// function sum(a,b){
//     var c = a+b;
//     return c;
// }

// console.log(sum(10,20));

// Function Expressions

// const sum = function(a,b){

//     if(typeof a === 'undefined'){a=0;}
//     if(typeof b=== 'undefined'){b=0;}

//     var c = a+b;
//     return c;
// }

//ES6 deafult parameters
const sum = function(a=0,b=0){

    var c = a+b;
    return c;
}

function sumAll(){
    var total = 0;

    for(let i =0; i<arguments.length; i++){
        total+=arguments[i];
    }
    return total;
}


console.log(sum(10,30));
console.log(sum(10)); //NaN
console.log(sum(10,30,40,50));

console.log(sumAll(10,20,30,10));