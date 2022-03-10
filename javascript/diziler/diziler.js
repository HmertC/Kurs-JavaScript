// // // Arrays

// let names = ['alex', 'volkan','sow', 'luciano'];
// let years = [2004,2005,2012,2006,1998];
// let mix = ['mert', 'clrkn', 1990,null,undefined,['futbol','film']];



// // // get array item

// // console.log(names[0]);
// // console.log(names[3]);


//  set array item

// // names[names.length]='guiza';


//  add item
// // years.push(2010); son eleman 
// // years.unshift(1998); ilk eleman 

// // // remove item
// // years.pop(); son eleman
// // years.shift(); ilk eleman


// // // indexof
// // let index = names.indexOf('alex');
// // console.log(' index :'+index);

// // //reverse 
// // names.reverse();

// sort sıralama yapar
// years.sort();

// // //concat
// // let val = years.concat(names);
// // console.log(val);


// // spilce
// // names.splice(2,0,'lefter'); // hangi elamandan başlıyorsun, kaç tane elamen siliyorsun, hangi elemanı ekliyorsun

// //find
// function over18(year){
//     let age = 2021 - year;
//     return age>=18;
// }
// //let val = years.find(over18);

// //filter

// //let val = years.find(over18);
// let val = years.filter(over18);
// console.log(val);


// console.log(names);
// console.log(names.length);
// console.log(typeof names);


// // console.log(years);
// // console.log(mix);



// UYGULAMAAAAA


let marka = ['bmw', 'mercedes', 'opel', 'mazda'];

// Dizi kaç elemanlıdır

console.log(marka.length);

// dizinin ilk ve son elemanı nedir
console.log(marka[0]);
console.log(marka[3]);
console.log(marka[marka.length-1])


//' Renault ' değerini sona ekle 
// marka[4] = "Renault";

marka[marka.length] = 'Renault';


// 'toyota' değerini dizinin başına ekleyin
marka.unshift('toyota');

// renault değerini silin
marka.pop('renault');
// toyota değerini sil
marka.shift('toyota');

// dizi elemanlarını ters cevir 
marka.reverse();

// diziyi alfabetik sıralama
marka.sort();

// let num = ['1', '2', '5', '80'];

// console.log(num.sort());

// opel dizinin bir elemanı mıdır
let index = marka.indexOf('opel');
console.log(' index :'+index);

console.log(marka.indexOf('opel'));

// var str = "chevrolet,Dacia"; ifadesini dizeye cevir
var str = "chevrolet,Dacia";
let marka2 = str.split(',');
console.log(marka2);

// birleştirme

let val = marka.concat(marka2);
console.log(val);

// dizinin son 2 elemanını sil
console.log(val.splice(4,2));

console.log(val);
console.log(marka);

// Bilgeleri dizi içinde saklayınız
// let mix = ['yiğit bilgi','sena turan','ahmet yesevi', 2010,19990,1998]; //bu karışık yol kardeşim console.log(mix);

var studentA = ['alex','souza', 2004];
var studentB = ['moussa','sow', 2012];
var studentC = ['luis','gustavo', 2020];

var students = [studentA,studentB,studentC];

console.log(students[0]);
console.log(students[0][1]);
console.log(students[0][2]);

console.log(students);

