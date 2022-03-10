// object create

let personProto ={
    calculateAge : function()  {
        return 2022 - this.ybirth
    }
}

let cabbar = Object.create(personProto);

cabbar.name ='cabbar';
cabbar.ybirth = 2001;
cabbar.job= 'amele';

let rezzak = Object.create(personProto,{
    name :{value:'rezzak'},
    ybirth : {value : 1995},
    job : {value : 'iş insanı'}
});

console.log(rezzak);
console.log(rezzak.calculateAge());

console.log(cabbar);
console.log(cabbar.calculateAge());