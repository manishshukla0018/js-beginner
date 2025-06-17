// if 


if ( 3 != 2 ){


}

// Operator for Comparison 
// < , > , <= , >= , == ,!= , === ex:- 

// if ( 2 == "2")
// {
//     console.log("executed");
// }

// if ( 2 === "2")
// {
//     console.log("executed")
// }



const temp = 42

// if( temp === 42 ){
//     console.log("Less than 50");
    
// }
// else {
//     console.log("Temperature is greater than 50");
// }



// const score = 200

// if ( score > 100) {
//     const power = "fly"
//     console.log(`user power: ${power}`);
// }
// console.log(`user power: ${power}`)


// ShortHand Notation 

const balance = 1000

// if ( balance > 500 ) console.log("test")

// Nested if else 

// if ( balance < 500 )
// {
//     console.log("less than 500");
// }
// else if ( balance < 750 )
// {
//     console.log("less than 750");
    
// }
// else if ( balance < 900 )
// {
//     console.log("less than 900");
// }
// else {
//     console.log("less than 1200");
    
// }


const userLoggedIn = true
const debitCard = true 
const loggedInFromGoogle = false
const loggedInFromEmail = true

if ( userLoggedIn && debitCard && 2 == 3 ) {
    console.log("Allow to buy course");
    
}

if ( loggedInFromGoogle || loggedInFromEmail ) {
    console.log("User Logged in");
}