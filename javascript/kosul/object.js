// Objects Literals
// let val;
// let person = {
//     firstName : 'Cabbar',
//     lastName : 'yılmaz',
//     age = 7,
//     hobbies : ['music','game'],
//     address : {
//         city : 'mardin',
//         country : 'türkiye'
//     },
//     getBirthYear : function(){
//         return 2022-this.age;
//     }
// };


// val = person;
// val = person.firstName;
// val = person.lastName;
// val = person['firstName'];
// val = person.age;
// val = person.hobbies;
// val = person.hobbies[1];
// val = person.hobbies.length;
// val = person.address;
// val = person.address.city;
// val = person.address['city']
// val = person.getBirthYear();


// console.log(val);
// console.log(typeof person);


// let people = [
//                  {firstName : 'Cabbar', lastName:'yılmaz'},
//                  {firstName : 'Rezzak', lastName:'yılmaz'},
//                  {firstName : 'Muttalip', lastName:'yılmaz'}
//              ];
         
// val = people[0];
// val = people[0].firstName;

// for(let i=0; i<people.length; i++){
//     console.log(people[i].firstName);
// }

// console.log(val);
// console.log(typeof people);           
// console.log(people);


// UYGULAMAAAAA 

var aracBilgi = [
    {
        id: 'bmw116d_123',
        model : 'bmw 116d',
        yil : 2015,
        renk : 'Beyaz',
        servisKayit : [
            {
                id : 'bmw116d_123_1',
                tarih : '20/01/2016',
                km : '13000',
                ücret : 900,
                detay : [
                    {id: 'bmw116d_123_1_1',aciklama :  'yağ değişimi',ucret : 300},
                    {id: 'bmw116d_123_1_2',aciklama :  'filtre değişimi',ucret : 300},
                    {id: 'bmw116d_123_1_3',aciklama :  'fren hidroliği değişimi',ucret : 300}
                ]
            },
            {
                id : 'bmw116d_123_2',
                tarih : '10/01/2017',
                km : '28000',
                ücret : 1800,
                detay : [
                    {id: 'bmw116d_123_2_1', aciklama :  'yağ değişimi',ucret : 350},
                    {id: 'bmw116d_123_2_2',aciklama :  'filtre değişimi',ucret : 350},
                    {id: 'bmw116d_123_2_3',aciklama :  'fren hidroliği değişimi',ucret : 300},
                    {id: 'bmw116d_123_2_3',aciklama :  'balata değişimi',ucret : 800}
                ]
            }
        ] 
    },
    {
        id: 'bmw118i,_123',
        model : 'bmw118i',
        yil : 2015,
        renk : 'Beyaz',
        servisKayit : [
            {
                id : 'bmw118i_123_1',
                tarih : '20/01/2016',
                km : '13000',
                ücret : 900,
                detay : [
                    {id: 'bmw118i_123_1_1',aciklama :  'yağ değişimi',ucret : 300},
                    {id: 'bmw118i_123_1_2',aciklama :  'filtre değişimi',ucret : 300},
                    {id: 'bmw118i_123_1_3',aciklama :  'fren hidroliği değişimi',ucret : 300}
                ]
            },
            {
                id : 'bmw118i_123_2',
                tarih : '10/01/2017',
                km : '28000',
                ücret : 1800,
                detay : [
                    {id: 'bmw118i_123_2_1', aciklama :  'yağ değişimi',ucret : 350},
                    {id: 'bmw118i_123_2_2',aciklama :  'filtre değişimi',ucret : 350},
                    {id: 'bmw118i_123_2_3',aciklama :  'fren hidroliği değişimi',ucret : 300},
                    {id: 'bmw118i_123_2_3',aciklama :  'balata değişimi',ucret : 800}
                ]
            }
        ] 
    },
    {
        id: 'bmw320d_123',
        model : 'bmw320d',
        yil : 2015,
        renk : 'Beyaz',
        servisKayit : [
            {
                id : 'bmw320d_123_1',
                tarih : '20/01/2016',
                km : '13000',
                ücret : 900,
                detay : [
                    {id: 'bmw320d_123_1_1',aciklama :  'yağ değişimi',ucret : 300},
                    {id: 'bmw320d_123_1_2',aciklama :  'filtre değişimi',ucret : 300},
                    {id: 'bmw320d_123_1_3',aciklama :  'fren hidroliği değişimi',ucret : 300}
                ]
            },
            {
                id : 'bmw320d_123_2',
                tarih : '10/01/2017',
                km : '28000',
                ücret : 1800,
                detay : [
                    {id: 'bmw320d_123_2_1', aciklama :  'yağ değişimi',ucret : 350},
                    {id: 'bmw320d_123_2_2',aciklama :  'filtre değişimi',ucret : 350},
                    {id: 'bmw320d_123_2_3',aciklama :  'fren hidroliği değişimi',ucret : 300},
                    {id: 'bmw320d_123_2_3',aciklama :  'balata değişimi',ucret : 800}
                ]
            }
        ] 
    }
];

console.log(aracBilgi[0]);
console.log(aracBilgi[0].id);
console.log(aracBilgi[0].model);
console.log(aracBilgi[0].renk);
console.log(aracBilgi[0].servisKayit);

console.log(aracBilgi[0].servisKayit[0]);
console.log(aracBilgi[0].servisKayit[0].km);
console.log(aracBilgi[0].servisKayit[0].ücret);
console.log(aracBilgi[0].servisKayit[0].detay);





// console.log(aracBilgi[1]);
// console.log(aracBilgi[2]);




