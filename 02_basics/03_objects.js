// singleton
// Object.create

// object literals

const mySym = Symbol("key1")

const jsUser = {
    name : "Aditi",
    "full name":"Aditi Tarale",
    [mySym]:"mykey1",
    age: 20,
    location: "Pune",
    email: "aditi@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]

}

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
// console.log(jsUser[mySym]);


jsUser.email = "adititarale@gmail.com"
// Object.freeze(jsUser)
jsUser.email = "microsoft@gmail.com"
// console.log(jsUser);


jsUser.greeting = function()
{
    console.log("Hello JS User");
    
}

console.log(jsUser.greeting());


jsUser.greeting2 = function()
{
    console.log('Hello JS User, ${this.name}');
    
}
console.log(jsUser.greeting2());



