
function sayMyName () {

console.log("M");
console.log("A");
console.log("N");
console.log("I");
console.log("S");
console.log("H");
} 

// sayMyName()

//  function addTwoNumber(num1,num2)
//  {
//     console.log(num1 + num2);
//  }
function addTwoNumber(num1,num2)
 {
    return num1 + num2 

 }

 const result = addTwoNumber(3,4)
 
//  console.log(`Result: ${result}`)


function userLogIn (username)
{
    if (username === undefined)
    {
     console.log("Please enter a username ")
     return 
    }
     return `${username} Just Logged in`
}

// console.log(userLogIn())

// How Multiple value pass in function

function calculateCartPrice (...num1)
{
      return num1
}
console.log(calculateCartPrice(200,400,6000))


const user = {
    username: "Manish",
    price: 400

}

function HandleObject (anyobject)
{
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)


}

// HandleObject(user)
HandleObject({
    username: "sam",
    price: "199"
})

const arr = [200,300,400]

function returnsecondValue(getarray)
{
    return getarray[1]
}
console.log(returnsecondValue(arr))

