var a = 5;
var b = 'a';
var c = true;
var d;
var e = [1, 2, 3];
var f = [1, 2, 3];
var g = [1, 'a', true];
var h = ['a', 2, true]; //tuple
var krediPayment = 0;
var havalePayment = 1;
var eftPayment = 2;
var Payment;
(function (Payment) {
    Payment[Payment["kredi"] = 0] = "kredi";
    Payment[Payment["havale"] = 1] = "havale";
    Payment[Payment["kapidaode"] = 2] = "kapidaode";
    Payment[Payment["eft"] = 3] = "eft";
})(Payment || (Payment = {}));
;
var kreddi = Payment.kredi; //0
var havale = Payment.havale; //1
var kapidaode = Payment.kapidaode; //2
var eft = Payment.eft; //3
