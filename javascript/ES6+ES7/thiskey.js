//this keyword 
//ES5
// let list = {
//     category : 'phone',
//     names: ['Iphone 3', 'ıphone 6s','galaxy1'],
//     call : function() {
//         var self = this;
//         this.names.map(function(name) {
//             console.log(`${self.category} ${name}`);
//         })
//     }
// }


//ES6

// let list = {
//     category : 'phone',
//     names: ['Iphone 3', 'ıphone 6s','galaxy1'],
//     call : function() {
//         this.names.map((names) => {
//             console.log(`${this.category} ${name}`);
//         })
//     }
// }


// list.call();

//ES5
// function Game() {
//     this.live =0;
//     this.addlLive = function () {
//         var self = this ;
//         this.OneUp = setInterval(function() {
//             console.log(++self.live);
//         },1000)
//     }
// }


//ES6 

function Game() {
    this.live =0;
    this.addlLive = function () {
       
        this.OneUp = setInterval(() =>{
            console.log(++this.live);
        },1000)
    }
}


let player = new Game();

player.addlLive();