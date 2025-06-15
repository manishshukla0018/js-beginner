// primitive data types

// 7 types : String , number , Boolean, null, undefined, Symbol, 
// BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const OutsideTemp = null
let userEmail;

const id = Symbol('123')
const id2 = Symbol('123')


console.log(id == id2);


// Refernce Type Or Non - Primtive datatypes

// Array ,Object, Function

const heroes = ["shaktiman","naagraj","doga"] // Arrays
let myObj = {
    name: "manish", // Object 
    age: 18,
};

// function in js 

const myFun = function(){
  console.log("hello ")
}

console.log(typeof OutsideTemp)
console.log(typeof myFun)



// *****************************

// Stack(Primtive) , Heap(Non-Primitive)

let myYoutubename = "manishhshukla.com"

let anotherName = myYoutubename
anotherName = "chaiAurCode"

console.log(myYoutubename)
console.log(anotherName)

let user1 = {
    email: "manish@123.com",
    upi: "user@ybl",
};

let user2 = user1

user2.email = "akash@123.com"
console.log(user1.email)
console.log(user2.email)

