const user =
{
    username : "Aditi",
    price : 999,

    welcomeMessage : function()
    {
        console.log(`${ this.username} , welcome to website`);  
        console.log(this);
    }
}


// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);


// function chai()
// {
//     let username = "Aditi"
//     console.log(this.username);
    
// }

// chai()


// const chai = function()
// {
//     let username = "Aditi"
   
//     console.log(this.username);

// }

const chai = ()  =>
{
    let username = "Aditi"
    console.log(this);
    
}
// chai()

// const addTwo = (num1,num2) =>{
//     return num1 + num2
// }

// const addTwo = (num1,num2) => num1 + num2

// const addTwo = (num1,num2) => (num1 + num2)


const addTwo = (num1,num2) => ({username: "Aditi"})

console.log(addTwo(6,8));

const myArray = [2,5,7,8,3]

// myArray.forEach()
