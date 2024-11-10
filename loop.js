const computer = {
    name: 'Bangla',
    prossesor: 'AMD',
    ssd: '256gb',
    memory: '16gb',
    monitor: 'hp',
    'power supply': 'Revenger',
    keyboard: 'Redragon'
}

// console.log(computer)

for (const prop in computer) {
    // console.log(prop)
    // console.log(computer[prop])
}

const keys = Object.keys(computer)
// console.log(keys)
for (const key of keys) {
    console.log(key)
    console.log(computer[key])
}

for (const keys in computer) {
    console.log(keys)
    console.log(computer[keys])
}

const myObject = {
    a: 1,
    b: 2,
    c: 3
};

for (let prop in myObject) {
    console.log(myObject[prop]);
}

const x = ""
if (!x.length) {
    console.log("Hey")
} else {
    console.log("Hi")
}