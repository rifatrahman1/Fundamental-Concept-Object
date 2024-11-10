const collage = {
    name: 'BPI',
    class: ['11', '12'],
    event: ['science fair', 'bijoy dibos','21 Febuary'],
    unique: {
        color: 'blue',
        height: 7,
        price: 32000,
        result: {
            gpa: 5,
            category: 'top',
        }
    }
}

// console.log(collage)
const changeEvent = collage.event[1] = '16 December'
console.log(changeEvent)
const aroBesi = collage.unique.result.category = 'top top top top aro besi'
console.log(collage.unique.result.category)
console.log(aroBesi)
console.log(collage)