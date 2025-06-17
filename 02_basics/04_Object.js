// Object Singelton 

// const tinderUser = new Object()

// console.log(tinderUser)

const tinderUser1 = {}

tinderUser1.id = "123abc"
tinderUser1.name = "Sammy"
tinderUser1.idLoggedIn = false

// console.log(tinderUser1)

const regularUser = {
    email: "Some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Manish",
            lastname: "Shukla"
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstname);


const object1 = {1: "a", 2: "b"}
const object2 = {3:"a", 4: "b"}

// const object3 = {object1 , object2}

// const object3 = Object.assign({},object1,object2)

const object3 = {...object1, ...object2}
// console.log(object3);


const users = [
    {
        id: 1,
        email: "hr@gmail.com"
    },
    {
        id: 1,
        email: "hr@gmail.com"
    },
      {
        id: 1,
        email: "hr@gmail.com"
    },
]

users[1].email
// console.log(tinderUser1)

// console.log(Object.keys(tinderUser1))
// console.log(Object.values(tinderUser1))
// console.log(Object.entries(tinderUser1))

// console.log(tinderUser1.hasOwnProperty('isLoggedIn'))


// Object De-Structured 

const course = {
    courseName: "JS in Hindi ",
    price: "100",
    courseInstructor: "Manish"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

console.log(instructor);

// {
//     "name" : "Manish",
//     "courseName" : "Js in english",
//     "price" : "free"
// }

[
    {},
    {},
    {}
]