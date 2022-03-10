const person = {
    firstName : 'mert',
    lastName : 'cltkn'
}

Object.defineProperty(person,'fullName',{
    get function() {
        return `${this.firstName} ${this.lastName}`
    },

set function(value){
    const parts = value.split(' ');
    this.firstName = parts[0];
    this.lastName = parts[1];
}
})

Object.defineProperty(person,'age',{
    value : 50,
    writable : true
})

person.age = 55;

// person.firstName = 'cabbar';

// person.fullName = 'cabbar hayov';
// console.log(person.fullName);
// console.log(person);