const userEmail = []

if ( userEmail )
{
    console.log("Got user Email ");
}
else {
     console.log("Don't have user Email");
}

// truthy values 
// [] , () , "0" , 'false', " " , {} , function(){}

// falsy values 
// false , 0 , -0 , BigInt 0n , "" , null , undefined , NaN


// if ( userEmail.length === 0) {
//     console.log("Array is Empty");
// }

// const emptyObj = {}

// if ( Object.keys(emptyObj) )
// {
//     console.log('object is empty');
    
// }


// Nullish coalescing operator (??) : null undefined

let val1;

// val1 = 5 ?? 10
// val1 = null ?? 10

// val1  = undefined ?? 15

val1  = null ?? 10 ?? 30



console.log(val1);

// Ternary Operator 

// condition ? true : false

const iceTeaPrice  = 100

iceTeaPrice >=80 ? console.log("less than 80") : console.log("More than 80");

