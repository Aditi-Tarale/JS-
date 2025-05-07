const user = 
{
    username: "Aditi",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function()
    {
        // console.log("Got user details from database");   
        // console.log(`Username: ${this.username}`);
        // console.log(this);
    }
}

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);


function User(username,loginCount,isLoggedIn)
{
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn



     return this // implisite difine write or do notwrite
}

const userOne = new  User("Aditi",12,true)
const userTwo = new User("Javascript",11,false)
 console.log(userOne.constructor);
// console.log(userTwo);

