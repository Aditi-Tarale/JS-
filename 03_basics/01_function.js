
function sayMyName()
{
    console.log("A");
    console.log("d");
    console.log("i");
    console.log("t");
    console.log("i");
}

// sayMyName()


// function addTwoNumbers(num1, num2)
// {
//      console.log(num1 + num2);
     
// }

function addTwoNumbers(num1, num2)
{
    // let result = num1+num2
    // return result

    return num1 + num2
     
}

const result = addTwoNumbers(4,5)

// console.log("Result: ",result);


function loginUserMessage(username = "aadi")
{
    if(!username)
    {
         console.log("please enter a username");
         return
         
    } 
    return `${username} just logged in`
}

// console.log(loginUserMessage("Aditi"))
// console.log(loginUserMessage());


function calculateCartPrice(...number)
{
    return number
}

// console.log(calculateCartPrice(200,400, 500));
const user =
{
    username: "Aditi",
    price: 199
}

function handleObject(anyobject)
{
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    
}

// handleObject(user)

handleObject({
    username: "adi",
    price: 399
})

const myNewArray = [200,400,100,600]

function returnSecondValue(getArray)
{
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,500,670,10000]));






