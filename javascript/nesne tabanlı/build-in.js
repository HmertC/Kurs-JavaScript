//string 

var str1 = 'mert';
var str2= new String('mert');

console.log(str1);
console.log(str2);

if(str1 === 'mert'){
   console.log('yes');
}else{
    console.log('no');
}


String.prototype.repeat = function(n){
    return new Array(n+1).join(this);
}

console.log('mert'.repeat(5));

//number 

var num1 = 10;
var num2 = new Number(10);

//boolen
var bool1 = true;
var bool2 = new Boolean(true);

//object

var obj1 ={
    name : 'mert'
};

var obj2 = {
    name : 'cabbar'
};

//array
var arr1 =['cabbar','rezzak','haşmet','muttalip'];
var arr2 = new Array('cabbar','rezzak','haşmet','muttalip');

Array.prototype.remove= Array.prototype.remove || function(member){
    var index = this.indexOf(member);

    if(index > -1){
        this.splice(index,1);
    }
    return this;
}

console.log(arr1.remove('cabbar'));