// callback function
let val;


function MultipleByTwo(a,b,c,calback){
    let arr = [];


    if(calback && typeof calback ==='function'){

         for(let i=0; i<3;i++){
           arr[i] = calback(arguments[i]*2);
        }
    }
    return arr;
}

function addOne(a){
    return a+1;
}

function addTwo(a){
    return a+2;
}
function addThere(a){
    return a+3;
}



// val = MultipleByTwo(5,10,20,addOne);
// val = addOne(10);


val = MultipleByTwo(5,10,20,function(a) {
   return a+1;
});

// for(let i=0; i<val.length;i++){
//     val[i] = addOne(val[i]);
// }
console.log(val);