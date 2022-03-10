// UYGULAMAAAA

var hesapA = {
    ad : 'cabbar yılmaz',
    hesapNo: '123456',
    bakiye : 2000,
    ekhesap : 1000
}

var hesapB = {
    ad : 'Rezzak Az',
    hesapNo: '132456',
    bakiye : 5000,
    ekhesap : 2500
}

function paraCek(hesap,miktar){
    console.log(`Merhaba ${hesap.ad}`);

    if(hesap.bakiye >= miktar){
        hesap.bakiye = hesap.bakiye - miktar;
        console.log('paranı al');
    }else {  
        var toplam = hesap.bakiye + hesap.ekhesap;

        if(toplam>=miktar){
            if(confirm('ek hesabını kullanmak ister misin')){
                console.log('paranı al')
                var bakiye = hesap.bakiye;
                var ekhesap = miktar - bakiye;
                hesap.bakiye = 0;
                hesap.ekhesap = hesap.ekhesap - ekhesap;

            }else {
                console.log(`${hesap.hesapNo} nolu hesapta ${miktar} yok`);
            }
        }else {
            console.log('bakiye yok')
        }
    }
}

paraCek(hesapA,3000);
// paraCek(hesapB,2000);