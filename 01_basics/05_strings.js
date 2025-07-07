const name = "prathmesh"
const repoCount = 5

console.log(name + repoCount);

console.log(`hey ${name} you have total ${repoCount} in your GitHub account`)

const fullName = 'prathmesh rikame'
console.log(fullName[0]);
console.log(fullName.__proto__);

console.log(fullName.length);

console.log(fullName.toUpperCase());
console.log(fullName.charAt(8));
console.log(fullName.indexOf('r'));

const newStr = fullName.substring(0, 4)
console.log(newStr);


const anotherStr = fullName.slice(2, -1)
console.log(anotherStr);

const gameName = 'pra-hm-sh-r-ik-me'
console.log(gameName.split('-'));
