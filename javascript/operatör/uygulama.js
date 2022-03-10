// Kİlo ve Boy bilgileri 
let IndexCan;
let IndexAda;

const kgCan = 60;
const kgAda =45;

const heigtCan=1.70;
const heigtAda=1.50;

IndexAda =(kgAda) / (heigtAda*heigtAda);
IndexCan = (kgCan) / (heigtCan*heigtCan);

console.log(IndexAda.toFixed(2),IndexCan.toFixed(3));

let adaHigherIndex= IndexAda>IndexCan;
let canHigherIndex = IndexCan>IndexAda;

console.log("ada'nın Kilo Indeksi Canın kilo indeksinsen daha büyük:" +adaHigherIndex);
console.log("canın kilo indeksi adanın kilo indeksinden daha büyüktür:"+canHigherIndex);


let AdaZayif = (IndexAda>=0) && (IndexAda<=18.4);
let AdaNormal = (IndexAda >=18.5) && (IndexAda <=24.9);
let AdaFazlaKilo = (IndexAda >=25) && (IndexAda <=29.9);
let AdaObez = (IndexAda >=30);

console.log("Ada Zayıf:"+AdaZayif);
console.log("Ada Normal:"+AdaNormal);
console.log("Ada Kilou:"+AdaFazlaKilo);
console.log("Ada Obez:"+AdaObez);