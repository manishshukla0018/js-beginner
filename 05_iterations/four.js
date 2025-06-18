const myObj = {
    js: "JavaScript",
    cpp: "C++",
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObj) {
   console.log(`${key} shortcut is for ${myObj[key]}`);
   
}

const arr = ["js","ruby","python","java","cpp"]

for (const key in arr) {
   console.log(arr[key]);
   
}