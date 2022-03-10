// // Strings

// const firstName = 'mert';
// const lastName = "cltkn";
// let hobbies = 'sinema,spor,kitap,yazılım';
// const age = 23;

// let val;

// // String concatenation
// val = firstName + " " + lastName;

// val = 'Mert';
// val += 'cltkn';

// val = 'Benim Adım ' + firstName+ ' '+ lastName+ ' ve yaşım' + age + "Mardin'de yaşamakta bulunuyorum.";

// //string concat 

// val= firstName.concat(' ', lastName);

// // string uppercase - lowercase

// val = val.toUpperCase();

// val = val.toLowerCase();


// //string replace

// val = '  '+val.replace('mert', 'berk')+'   ';

// //trim
// val = val.trim();


// //substring

// val = val.substring(0,5)

// //slice 

// val = val.slice(0,5);

// //val = val.indexOf('t');

// //val = val[0]; 

// // string length....
// //val = val.length; 


// val = hobbies.split(',');


// console.log(val);
// console.log(typeof val)


// UYGULAMAAAA 

var sentence = "Template literals or template strings is the ability Have multi-line strings without any funny business.  ";

var url = "htpp://sadikturan.com/modern Javascript Kursu sıfırdan ileri seviye";

// cümle kaç karakterldir
console.log(sentence.length);

// kaç kelimeden oluşuyor

console.log(sentence.trim().split(' ').length);

// Tüm cümleyi küçük harf yapma

console.log(sentence.toLowerCase());

// Büyük harf 

console.log(sentence.toUpperCase());

// Cümlenin başındaki ve sonudaki boşlukları silin

console.log(sentence.trim());

// '-' karaterini silin

console.log(sentence.replace('-',''));

// urlnin içindeki str kısmını çıkar
var str = 'http://'

console.log(url.substring(str.length));
console.log(url.slice(str.length));

// url hangi protocolü kullanmaktadır (http, https)
console.log(url.startsWith('http')); //true false

// url '.com' iceriyor mu

console.log(url.indexOf('.com'));
console.loh(url.includes('.com'));

// url strin ifadesini geçerli bir url olarak düzenleyin

console.log(url.toLowerCase()
                .replace(/ /g,'-')
                .replace(/ı/g,'i')
                .replace(/ü/g,'u')
                .replace(/ö/g,'o')
                .replace(/ş/g,'s')
                .replace(/ç/g,'c')

);