const userEmail = []
if(userEmail)
{
    console.log("Got user email");
}
else
{
    console.log("Don't have user email");
    
}


// if(userEmail.length === 0)
// {
//     console.log("Array is empty");
    
// }

const empObj = {}

if(Object.keys(empObj).length === 0)
{
    console.log("Object is empty");
    
}


//Nullish Coalescing Operator (??) : null undefined


let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20


console.log(val1);


//Terniary Operator
//condition ? true : false

const iceteaPrice = 100
iceteaPrice <= 80 ?console.log("less than 80"):console.log("more than 80");


