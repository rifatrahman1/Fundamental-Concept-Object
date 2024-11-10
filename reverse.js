const sentence = 'I am a learning web dev';
let reverse = '';
// console.log(sentence);

for (const letter of sentence){
    reverse = letter + reverse;
}
console.log(reverse)