// reduce

const nums = [1,2,3]

// const total = nums.reduce(function (acc,currval) 
// {
//     console.log(`acc:${acc} and currval: ${currval}`);
//     return acc + currval
// },0)

const total = nums.reduce((acc, curr)=> acc + curr,0)

console.log(total);


const shoppintcart = 
[
    {
        itemName: "js.course",
        price: 2999
    },
    {
        itemName: "FullStack.course",
        price: 5499
    },
    {
        itemName: "py.course",
        price: 999
    },
    {
        itemName: "Data Science.course",
        price: 12999
    }
]

const totals =shoppintcart.reduce((acc,item) => acc+item.price,0)
console.log(totals);
