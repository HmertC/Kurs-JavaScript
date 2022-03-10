//referanceError
//typeError
//syntaxError
//URIError

// Error

// var user = {
//     name : 'mert cltkn'
// }


// try {
//     // console.log(myFunction());
//     console.log(user.name);

//     if(!user.email){
//         throw new SyntaxError('user has no mail');
//     }

//     console.log(user.email);
// }

// catch(e){
//     console.log(e);
//     console.log(e.meesage);
//     console.log(e.name);
//     console.log(e instanceof ReferenceError);
//     console.log(e instanceof TypeError);
//     console.log(typeof e);
// }

// finally{
//     console.log('finally block');
// }

//Uygulamaaaa 

document.getElementById('myBtb').addEventListener('click',function (e){ 
    
    var name = document.getElementById('name');
    var age = document.getElementById('age');
    var errors = document.getElementById('errors');
    errors.innerHTML = '';

    try{
        if(name.value.length === 0){
            throw new Error('name is required');
        }
    
        if(name.value.length > 20){
            throw new Error ('name is too long');
        }

        if(age.value.length === 0){
            throw new Error ('age is required');
        }

        if(isNaN(age.value)){
            throw new Error ('age is not numeric');
        }

        console.log('form is submit')

    }catch(err){
        errors.innerHTML = err;
    }finally{
        name.value='';
        age.value='';
    }

     e.preventDefault();
 });