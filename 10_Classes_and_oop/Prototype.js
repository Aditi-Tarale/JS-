// let myName = "aditi    "
// let myemai = "aditi@gmail.com     "

//console.log(myName.trueLength)

let myHeros = ["thor","spiderman"]

let heroPower = 
{

}

Object.prototype.aditi = function()
{
    console.log("Aditi is present in all objects");
}

Array.prototype.heyAditi = function()
{
    console.log("Aditi says hello"); 
}

// heroPower.aditi()
// myHeros.aditi()
// myHeros.heyAditi()
// heroPower.heyAditi()

// Inheritance

const User =
{
   name:"Aditi" ,
   email:"adititarale@gmail.com"
}
const Teacher =
{
    makeVideo: true
}

const TeachingSupport = 
{
    isAvailable: false
}

const TASupport =
{
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern Syntax

Object.setPrototypeOf(TeachingSupport,Teacher)


let anotherUsername = "Aditi   "

String.prototype.trueLength = function()
{
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);  
}

anotherUsername.trueLength()
"Aditiiii".trueLength()
"iceTea".trueLength()