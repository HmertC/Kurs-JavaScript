// 1) Global variable namig conflicts
//script.js
// var name = 'mert';

//app.js
// var name = 'cabbar';

// console.log(name);

// 2-) Encapsulion

// var counter = {
//     number : 0,
//     increment : function() {
//         return ++this.number;
//     },

//     decrement : function() {
//         return --this.number;
//     }
// }

// console.log(counter.increment());
// console.log(counter.increment());
// counter.number=10;
// console.log(counter.decrement());

//IIFE (Immediately Invoked Funtction Expressions)

// (function() {
//     var name = 'Mert';
//     console.log(name);
// })();


// (function() {
//     var name = 'Cabbar';
//     console.log(name);
// })();

// var Module = (function() {
//     //private members

//     let number =0;

//     let increment = function() {
//         return ++number;
//     }

//     let decrement = function () {
//         return --number;
//     }


//     return {
//         //public members
//         increment,
//         decrement
//     }
// })();

// // console.log(number);
// console.log(Module.increment());
// console.log(Module.increment());
// console.log(Module.decrement());


// var Modüle = (function() {
//     var privateMethod =function () {

//     };

//     return {
//         publicMethod : function() {
            
//         },
//     }
// })();

// Modüle.publicMethod();

//UYGULAMAA UYGULAMA UYGULAMA UYGULAMA UYGULAMAUYGULAMAUYGULAMA UYGULAMA UYGULAMA UYGULAMA UYGULAMA



const products = [
    {name: 'Ibnephone 8', price : 5200},
    {name: 'Ibnephone 9', price : 2500},
    {name: 'Ibnephone 7', price : 1750}
];



var ProductController = (function(data) {
    
    //private members
    var collections = data || [];

    const addProduct = function (product) {
        collections.push(product);
    }

    const removeProduct = function(product) {
        var index = collections.indexOf(product);

        if(index>=0){
            collections.splice(index,1);
        }
    }

    const getProdcuts = function() {
        return collections;
    }

    //public members 

    return {
        addProduct,
        removeProduct,
        getProdcuts
    }
})(products);



ProductController.addProduct(products[0]),
ProductController.addProduct(products[1]),

ProductController.removeProduct(products[0]),
ProductController.addProduct(products[2])

console.log(ProductController.getProdcuts());

//Module Extenting

var extended = (function(m) {
    
    m.sayHello = function() {
        console.log('Hello from extended modüle')
    }

    return m;


})(ProductController || {});

extended.sayHello();
console.log(extended.getProdcuts());
