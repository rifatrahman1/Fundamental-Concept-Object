const address = 'horinGata';
const part = address.slice(-9);
// console.log(part)

const friendsStr = 'rifat, rahman, nafiz, sany, rahmatullah, sabbir, fahim';
const friends = friendsStr.split('');
// console.log(friends)

const realFriends = [ 'rifat', 'rahman', 'nafiz', 'sany', 'rahmatullah', 'sabbir', 'fahim' ]
console.log(realFriends.join())
console.log(realFriends.join('-'))
console.log(realFriends.join('|'))