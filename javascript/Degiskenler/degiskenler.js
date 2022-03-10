// // // Değişkenler

// // var age;
// // console.log(age);

// // age=20;
// // console.log(age);


// // var fullname='Halil Mert';
// // console.log(fullname);

// // fullname='Ali Veli';
// // console.log(fullname);

// // // Değişken tanımlama Kuralları

// // // sayısal ifade ile başlayamaz

// // var yas1;
// // var _yas2;
// // var $yas3;

// // // Komut isimleri ile tnaımlama yapılamaz
// // // birden fazla kelime

// // var ad='mert'
// // var soyad='cltkn'

// // var ad_soyad='Mrt Cltkn'
// // var adSoyad='ali veli'

// // // case sensitive (büyük küçük duyarlılığı)

// // var firstName='Mert';
// // var FirstName='Ali';

// // console.log(firstName);
// // console.log(FirstName);

// // // var , let , const

// // let city='Kocaeli';
// // console.log(city);

// // const email='abc@gmai.com';
// // console.log(email);


// // Ders2 Değişken Türleri

// // pritive types

// // String
// let firstName='Ali';

// // Number
// let age=20;
// let money = 100;

// // Boolean
// let isActive = true;

// // Null

// let job =null;

// // underfined
// let car;

// console.log(typeof car);


// // reference types - objects

// // array

// let names=['ali' , 'ahmet' , 'can'];

// // object

// let addres = {
//     city:'Koceaeli',
//     country :'Türkiye'
// }

// // function

// var calculateAge =function(){
//     return 0;
// }

// console.log(typeof calculateAge);


// Ders 3: Tür Dönüşümü

// let num1 = Number('5');
// let num2 = Number('10');

// let total = num1+num2;

// console.log(total);
// console.log(typeof total);

let val;

// number to String
val= String('10');

// bool to string
val = String(true);

// date to string
val = String(new Date());

// array to string
val = String([1,2,3,4]);

// to string()

val= (10).toString();
val = (false).toString();

// string to number
val = Number('10');
val = Number(true);
val = Number(false);
val = Number(null);
val = Number('a');
val = Number([1,2,3,4]);

// parsInt
// parseFloat
val = parseInt('10');
val = parseInt('10.5');
val = parseFloat('10.5');


console.log(true);
console.log(val);
console.log(typeof val);
console.log(val.toFixed());

