let name = "Aditi"
let repoCount =30;

// console.log(name + repoCount + " value");


// console.log("My name is  ${name} and my repo count is ${repoCount}" );


const gameName = new String('ridhikat')

// console.log(gameName[0])
// console.log(gameName.__proto__);



// console.log(gameName.length)
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(3));
// console.log(gameName.indexOf('t'));

const newstr = gameName.substring(0,4)
// console.log(newstr)


const anotherStr = gameName.slice(-8,4)
console.log(anotherStr);

const newStr1 = "  aditi   "
console.log(newStr1);
console.log(newStr1.trim());

const url = "https://aditi.com/aditi%20tarale"

console.log(url.replace('%20','-'));

console.log(url.includes('radhu'))



console.log(gameName.split('-'));




