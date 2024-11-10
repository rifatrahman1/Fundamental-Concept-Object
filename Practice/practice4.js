// Count the number of properties.

// 1 way

let student = {
    name: 'Ariana Grande',
    age: 21,
    city: 'Gaibandha',
    isStudent: true
};

const count = Object.keys(student).length;

// console.log(count)

// number 2 way

let students = {
    name: 'Ariana Grande',
    age: 21,
    city: 'Gaibandha',
    isStudent: true
};

let Count = 0;
for (const key in students) {
    if (Object.prototype.hasOwnProperty.call(students, key)) {
        const chatro = students[key];
        console.log(chatro);
        Count++;
    }
}
console.log('total Property:', Count)