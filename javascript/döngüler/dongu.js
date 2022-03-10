// Loops

// for loop

// for(let i = 0; i<10; i++){
  

//    if(i==3){
//        console.log('en sevdiğim rakam:' +i);
//        continue;
//    }

//    if(i== 6){
//        console.log('en sevmediğim rakam : 6');
//        break;
//    }

//    console.log(i);

// }

// while loop

// for(let i=0; i<10; i++){
//     console.log(i);
// }

// let i=0;
// while(i<10){
//     console.log(i);
//     i++;
// }

// do-while loop

// let i=0;

// do{
//     console.log(i);
//     i++;
// }while(i<10)

// let sonuc = 1;
// for (let i = 10; i<0; i--){
//     if(,%2==00){
//     sonuc*=i;
//   }
// }

// console.log(sonuc);


// let val='\n';
// for(let i=0; i<10;i++){

//     for(let j=0;j<10;j++){
//         val +='* ';
//     }
//     val+='\n';
// }

// console.log(val);


// GENELLL UYGULAMAAAA 

/* Demo loops : sayı tahimini oyunu 

    1-10 araso rastgale sayı üretilen ifadeler bulun puanlama yapın ve kullanıcı kaç kerede bileceğini belirlesin
 */

var hak, can;
var tahmin,sayac=0;
var sayi =Math.floor((Math.random()*10+1));
can = Number(prompt('kaç kerede bileceksiniz?'));
hak = can;
console.log(sayi);

while(hak>0){
    hak--;
    sayac++;
    tahmin = Number(prompt('bir sayı giriniz: '));

    if(sayi==tahmin){
        console.log(`Tebrikler ${sayac} defada Bildiniz`);
        console.log(`puan : ${100 - (100/can)*(sayac-1)}`);

        
        break;
    }else if(sayi < tahmin){
        console.log('aşağı');
    }else{
        console.log('yukarı');
    }

    if(hak==0){
        console.log('hakkınız bitti. sayı :'+sayi);
    }
}