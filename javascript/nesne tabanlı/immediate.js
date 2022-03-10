//Immediate Functions

// (function () {
    
// })();

(function (name) {
    var days =['sunday','monday','tuesday','wednesday','thursday','friday','saturday',];

    var today = new Date();

    var msg = 'Welcome ' +name+ ' today is ' +days[today.getDay()];

    console.log(msg);
}('cabbar'));

