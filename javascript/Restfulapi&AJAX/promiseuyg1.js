// var p = new Promise(function(resolve,reject) {
//    if(true){
//        resolve('success');
//    }else{
//        reject('Failure');
//    }
// });

// p.then(function(data) {
//     console.log(data);
// }).catch(function (err) {
//     console.log(err)
// });



// new Promise(function(resolve,reject) {
//     setTimeout(() => {
//         resolve(5);
//     }, 1000);
// }).then(function(number) {
//     console.log(number);
//     return number*number;
// }).then(function(number) {
//     console.log(number);
//     return number*number;
// }).then(function(number) {
//     console.log(number);
// });


// const isMomHappy = true;

// const willGetNewPhone = new Promise((resolve,reject)=>{
//     if(isMomHappy){
//         const phone = {
//             name : 'ıphone 52',
//             pric : 25000,
//             color : "silver"
//         }
//         resolve(phone);
//     }else{
//         const error = new Error('mom is not happy');
//         reject(error);
//     }
// });

// const showToFr = function(phone) {
    
//     const message = "He Friends this is my new phone " + phone.name;
//     return Promise.resolve(message);

// }

// const askMom = function() {
//     willGetNewPhone
//         .then(showToFr)
//         .then(message => console.log(message))
//         .catch(error => {
//             console.log(error);
//         })
// }

// askMom();


//UYGULAMAAAA XMLHttprequest ve Promiseeee

let myObj = {
    url : "https://randomuser.me/api/?results=5"
}

let request = obj => {
    return new Promise((resolve,reject)=>{
        let xhr = new XMLHttpRequest();
        xhr.open(obj.method || "GET" , obj.url);


        if(xhr.headers){
            Object.keys[obj.headers].forEach(key => {
                xhr.setRequestHeader(key,obj.headers[key])
            });
        }

        xhr.onload = ()=>{
            if(xhr.status >= 200 && xhr.status<300){
                resolve(xhr.response);
            }else{
                reject(xhr.statusText);
            }
        }

        xhr.onerror = () =>{
            reject(xhr.statusText);
        }

        xhr.send(obj.body);
    });
}

request(myObj)
    .then(data => {
        let users = JSON.parse(data);


        let html = "";
        users.results.forEach(user => {
           html +=`
            <div>
                <img src="${user.picture.medium}">
                <div>
                    ${user.name.title}
                    ${user.name.first}
                    ${user.name.last}
                </div>
            </div>
           `;
        })

        document.querySelector('#users').innerHTML = html;

    }).catch(error => {
        console.log(error);
    })