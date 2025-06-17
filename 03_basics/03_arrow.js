const user = {
    username: "Manish",
    price: 999,

    welcomeMessage: function()
    {
      console.log(`${this.username} ,welcome to website`);
      console.log(this)
    }
}

// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()

// console.log(this)


// function one() {
//     let username = "Manish"
//     console.log(this.username)
// }
// one()

// const chai = function one() {
//     let username = "Manish"
//     console.log(this.username)
// }
// chai()


const chai = () =>
{
    let username = "Manish"
    console.log(this.username)
}

// chai()


// const addTwo = (num1, num2) =>
// {
//    return num1 + num2
// }


// const addTwo = (num1, num2) => num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "Manish"}) 


console.log(addTwo())

