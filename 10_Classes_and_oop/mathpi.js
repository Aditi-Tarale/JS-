const descripter = Object.getOwnPropertyDescriptor(Math,"PI")

// console.log(descripter)


// console.log(Math.PI);
// Math.PI = 5;
// console.log(Math.PI);


const piyo =
{
    name: "ginger chai",
    price: 250,
    isAvailable: true,

    orderChai : function()
    {
        console.log("does not work");
        
    }
}

console.log(Object.getOwnPropertyDescriptor(piyo,"name"));

Object.defineProperty(piyo,'name',
    {
        // writable: false,
        enumerable:true
    }
)

console.log(Object.getOwnPropertyDescriptor(piyo,"name"));


for (let [key, value] of Object.entries(piyo)) 
{
    if(typeof value !== 'function')
    {
        console.log(`${key} : ${value}`);
    }
    
    
}

