// products = [
//     {id : 1,name : "samsung eric", price :3000},
//     {id : 2,name : "ıphone galaxe", price :7000},
//     {id : 3,name : "oppo note", price :2500}
// ]

// let added = true;

// function addProduct(prd,callback) {

//     if(added){
        
//     setTimeout(() => {
//         products.push(prd);
//         callback(null,prd);
//     }, 2000);
//     }else{
//         callback('500',prd);
//     }

// }

// function getProduct() {
//     setTimeout(() => {
//         products.forEach(p => {
//             console.log(p.name);
//         });
//     }, 1000);
// }

// addProduct({id:4,name: "Realme S5",price : 500},function(err,data) {
//     if(err){
//         console.log("hata : "+err);
//     }else{
//         console.log(data);
//     }
// });

//Promise

products = [
    {id : 1,name : "samsung eric", price :3000},
    {id : 2,name : "ıphone galaxe", price :7000},
    {id : 3,name : "oppo note", price :2500}
]



function addProduct(prd,callback) {

    return new Promise(function(resolve,reject) {
       
        setTimeout(() => {
            products.push(prd);
            let added = true;
            

            if(added){
                resolve();
            }else{
                reject('hata : 500');
            }
        });

    });
}

function getProduct() {
    setTimeout(() => {
        products.forEach(p => {
            console.log(p.name);
        });
    }, 1000);
}

addProduct({id:4,name: "Realme S5",price : 500}).then(getProduct).catch(function(err) {
    console.log(err);
});
