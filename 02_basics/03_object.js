// Singelton :- with the help of constructor 
// Object.create

// Object Literals

const mySum = Symbol("Key1")
const user = {
    name: "Manish",
    "full Name": "Manish Shukla",
    [mySum]: "myKey1",
    age: 19,
    location: "Kanpur",
    email: "manish@123.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","friday"]

}
// console.log(user.email)
// console.log(user["email"])
// // console.log(user.full Name)
// console.log(user["full Name"])
// console.log(user[mySum])


// user.email = "chatgpt.com"
// Object.freeze(user)
// user.email = "akash@123.com"
// console.log(user)


user.greetings = function()
{
    console.log("Hello JS User ")
}

user.greetingstwo = function()
{
    console.log(`Hello JS user ${this.name}`)
}

console.log(user.greetings())
console.log(user.greetingstwo())