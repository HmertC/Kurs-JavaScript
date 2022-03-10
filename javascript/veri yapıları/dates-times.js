// // Date Object

// let d = new Date();
// let birthday = new Date(1990,3,5);

// // set methhods

// d.setFullYear(2020);
// d.setMonth(5);
// d.setDate(20);
// d.setHours(10);
// d.getMinutes(45);
// d.getSeconds(20);



// // get methods

// console.log(d.getDate());
// console.log(d.getDay());
// console.log(d.getFullYear());
// console.log(d.getHours());
// console.log(d.getMonth());
// console.log(d.getMinutes());
// console.log(d.getSeconds());


// console.log(d.getFullYear()- birthday.getFullYear());
// console.log(d.getMonth() - birthday.getMonth());
// console.log(d.getDate() - birthday.getDate());


// console.log(d);
// console.log(typeof d);


// UYGULAMAAAAA

// şimdiki tarihi yazdırma

var dt = new Date();

console.log(dt.getMonth()+1);
console.log(dt.getDate());
console.log(dt.getFullYear());

console.log(dt);


// Tarih ve saat objesi içeren date

var dtA = new Date('6/15/2000 15:15:15');
var dtB = new Date(2000,5,15,15,15,15);

console.log(dtA);
console.log(dtB);

// 1/1/1990 tarihinden bir gün öncesi

var dtC = new Date('1/1/1990');
var dayOfMonth = dtC.getDate();
dtC.setDate(dayOfMonth-1);


console.log(dtC);

// iki tarih arasında geçen süre 
var dtd = new Date('1/1/2000');
var dtf = new Date('1/1/2001');

var milisecond = dtf - dtd;
var saniye = milisecond / 1000;
var dakika = saniye / 60;
var saat = dakika/ 60;
var gun = saat/ 24;


console.log('milisecond :' +milisecond);
console.log('saniye :'+saniye);
console.log('dakika :' +dakika);
console.log('saat : ' +saat);
console.log('gün : ' +gun);

// Yaş Hesaplama

var birthday = new Date('5/6/1975');
var ageDifMs = Date.now() - birthday.getTime();
var ageDate = new Date(ageDifMs);

console.log(ageDate.getFullYear()- 1970);

// console.log(birthday.getTime());
// console.log(Date.now());




// Her yık mayıs 2 hafta pazar günü kutlanan anneler günü 2029 yılında ne zaman kutlanacktır


var anne = new Date();
anne.setHours(0,0,0,0);
anne.setFullYear(2029);
anne.setDate(1);
anne.setMonth(4);

while(anne.getDay() !=0){
    anne.setDate(anne.getDate()+1)
}

anne.setDate(anne.getDate()+7);

console.log(anne);

// console.log(anne.getDay());