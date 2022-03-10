// call apply and bind

var welcome = function(a,b) {
    console.log('welcome' +this.name+ ' .Are you interested in ' +a+' and ' +b);
}

var cabbar ={name : 'cabbar'};
var rezzak = {name : 'REzzak'};

welcome.call(cabbar, 'asp.net', 'angular');
welcome.call(rezzak,'asp.net', 'angular');

welcome.apply(cabbar['asp.net', 'angular']);
welcome.apply(rezzak['asp.net', 'angular']);


welcomeCabbar = welcome.bind(cabbar);

welcomeCabbar('asp.net','angular');

welcomeRezzak = welcome.bind(rezzak);
welcomeRezzak('asp.net', 'angular');


//UYGULAMAAAAAA
//Demo  : numeric Range

var num = {
    min: 0,
    max : 100,
    checkNumericRange : function(value){
        if(typeof value !== 'number'){
            return false;
        }else{
            return value>=this.min && value <= this.max;
        }
    }
}

console.log(num.checkNumericRange(20));
console.log(num.checkNumericRange(-20));

var num1 = {min: 50, max : 60};

console.log(num.checkNumericRange.call(num1,55));
console.log(num.checkNumericRange.apply(num1,[55]));

var checkNumber = num.checkNumericRange.bind(num1);

console.log(checkNumber(56));