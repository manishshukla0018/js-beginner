// reduce in JavaScript 

const nums = [1,2,3];

// const MyTotal = nums.reduce(function (acc,currval)
// {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval;
// }, 0)

const myNums = nums.reduce( (acc,currval) => acc + currval, 0)


console.log(myNums);

const ShoppingCart = [
    {
        itemName: "js course",
       price: 199
    },

    {
        itemName: "Python course",
        price: 399
    },

    {
         itemName: "Data science course",
         price: 699
    },

    { 

         itemName: "Machine Learning  course",
         price: 799
    },

    {
    itemName: "Cyber security course",
    price: 999
    },
]

const Total = ShoppingCart.reduce( (acc,item) => acc + item.price, 0)

console.log(Total);
