//maps : key/value pairs (collection)

let value;

const numbers = new Map();

numbers.set(1,'one');
numbers.set('2','two');
numbers.set(3,'three');
numbers.set('four','four');

val = numbers;
val = numbers.get(1);
val = numbers.get('2');
val = numbers.get('four');
val = numbers.size;
val = numbers.has(1);
val = numbers.delete('four');
val = numbers.has('four');
// numbers.clear();

console.log(val);

for( var [key,val] of numbers){
    console.log(key + ' = ' +val);
}

for( var [key,val] of numbers.entries()){
    console.log(key + ' = ' +val);
}

for( var key of numbers.keys()){
    console.log(key);
}

for( var val of numbers.values()){
    console.log(val);
}

numbers.forEach(function (key,val) {
    console.log(key + ' - ' +val);
  })

  var first = new Map([
      [1,'one'],
      [2,'two'],
      [3,'three']
  ]);


var second = new Map([
    [4,'four'],
    [5,'five']
]);

var merged = new Map([...first,...second]);

console.log(merged);
  