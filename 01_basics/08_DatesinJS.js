// Dates 

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString())
// console.log(myDate.toISOString())
// console.log(myDate.toJSON())
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toLocaleString())


// let myCreatedDate = new Date(2025,6,25,5,5)
// let myCreatedDate = new Date("2025-06-15")

let myCreatedDate = new Date("06-15-2025")
// console.log(myCreatedDate.toDateString())
// console.log(myCreatedDate.toLocaleString())

let myTimeStamp = Date.now()
// console.log(myTimeStamp)
// console.log(myCreatedDate.getTime())


// console.log(myCreatedDate.getSeconds())


let newDate = new Date()

console.log(newDate)
console.log(newDate.getDay())


newDate.toLocaleString('default',{
    weekday: "long",
})

