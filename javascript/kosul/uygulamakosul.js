// UYGULAMAAAAA

// var trafikC = new Date('04/20/2016');
// trafikC.setHours(0,0,0,0);

// var trafikMS = Date.now() - trafikC.getTime();
// var trafikGun =Math.floor(trafikMS/(1000*60*60*24));

// if(trafikGun <=365){
//     console.log('1. servis bakım süreniz geldi');
// }else if(trafikGun >365 && trafikGun<=365*2){
//     console.log('2. servis bakım süreniz gelmiştir');
// }else if(trafikGun>365*2 && trafikGun <=365*3){
//     console.log('3. servis bakım süreiniz gelimştir');
// }else {
//     console.log('bilinmeyen bir süre');
// }

// console.log(trafikGun);

var result = prompt("who's there?")

if(result == 'cancel'){
    console.log('cancelled');
}else if(result == 'Admin'){
    console.log('welcome Admin');

    var password = prompt('enter your password');

    if(password == 'cancel'){
        console.log('cancelled');
    }else if(password == '1234'){
        console.log('Welcome Admin');
    }else{
        console.log('wrong password');
    }


}else{
    console.log('I dont know you');
}
