// // Numbers

// let val;

// // val = Number ('10');
// // val = parseInt ('10');
// // val = parseFloat('10.5');
// // val = parseInt ('a10a');
// // val = isNaN('10')
// // val = isNaN('a10')

// // var num = 10.12345678  
// // val = num.toPrecision(5);
// // val = num.toFixed(2); 

// val = Math.PI;
// val = Math.round(2.4);
// val = Math.round(2.4);
// val = Math.ceil(2.4);
// val = Math.ceil(2.6);
// val = Math.floor(2.4);
// val = Math.floor(2.8);
// val = Math.sqrt(64);
// val = Math.pow(2,4);
// val = Math.abs(-100);
// val = Math.min(1,2,3,4,5,9);
// val = Math.max(134,254,3546,4546,93254,8234);
// val = Math.floor( math.random()*10+1);


// console.log(val);
// console.log(typeof val);


// UYGULAMAAAAA

var num = 15.123456789;

// toplamda 3 basamaklı bir sayı kullan 
console.log(num.toPrecision(3));


// ondalık kısmı 3 basamak sınırla

console.log(num.toFixed(3));



// en yakın sayıya yuvarla

console.log(Math.round(num));

// yukarı yuvarla

console.log(Math.ceil(num));

// aşağı yuvarla

console.log(Math.floor(num));

// sayıların büyük ve küçük olanını bul 

console.log(Math.min(1,2,10,56,20));

console.log(Math.max(1,2,10,56,20));

// sayı aralığını kullanıcının belirleyeci bir rastgele sayı üret

var min = 50;
var max = 100;

console.log(Math.floor(min+Math.random()*(max-min))); 

/*bir personel aldığıı maas hesaplama

**brüt maaş : 3700 tl
** brüt measi : 10,3 tl

agustos ayında toplmada 42 saat ise brüt maaş nedir ?
 
brüt maaş üerinde kesinti %25 ise net maaş kaçtır? */


var brutMaas = 3700;
var mesaiUcret = 10.3;
var mesaiSure = 42;
3
var toplamBrut = brutMaas + (mesaiUcret*mesaiSure);

var toplamNetmaas = toplamBrut - toplamBrut*0.25

console.log(toplamBrut.toFixed,Math.round(toplamNetmaas));
