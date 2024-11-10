// Loop through an object and print the key-value pairs with their types

const myObject = {
    name: 'John Doe',
    age: 25,
    city: 'Example City',
    isStudent: true
};

const keys = Object.keys(myObject);
console.log(keys)

const values = Object.values(myObject);
console.log(values)
console.log('key:',keys)