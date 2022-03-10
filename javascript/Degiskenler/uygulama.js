// Müşteri Ad
var customerName= 'Ali';

// Müşteri Soyad

var customerLastName='Veli';

// Müşteri Tc kimlik

var musteriId = '12345678901';

// sipariş total

var total = 205.6;
//  müşteri cinsiyet
var gender = true; //erkek true, kadın = false

// müşteri adres - object
var address ={
    city : 'Kocaeli',
    district: 'İzmit',
    body : 'Yeniyol yenişehir no.89'
}

// müşteri hobiler - Array 

var hobies = ['sinema', 'kitap' , 'spor'];

//toplam hesapla 

var order1= Number('100');
var order2= Number('150');

var totalOrder = order1 + order2;
console.log(totalOrder);

//** toplam 

var order3 = parseFloat('100.2');
var order4 = parseFloat('150.5');

var totalOrder2 = order3 + order4;
console.log(totalOrder2);

//**Tam sayı olarak toplama

var order5= parseInt('100.2');
var order6= parseInt('150.2');

var totalOrder3 = order5 + order6;
console.log(totalOrder3);


//yaş Hesaplama 

var yearsOfBirth = 1986;

console.log(new Date().getFullYear()-yearsOfBirth);

//string karakter hesaplama 

var course = 'En Büyük Fenerbahçe';

console.log(course.length);

