//  exporing the methods of dates and time one i java script
let myDate = new Date()
// console.log(myDate)
// console.log( typeof myDate)
// console.log(myDate.toString())
// console.log(myDate.toLocaleDateString())



// changing the format of the date 
// let newdate = new Date(2023,0,20)

// let newdate = new Date(2023,0,20,6,32,21)
// let newdate = new Date("12-02-2024")
let newdate = new Date("2023-01-15")



// console.log(newdate.toString())
// console.log(newdate.toLocaleDateString())

let date = new Date();
console.log(date)
// Months index start from 0 in javascript means 0 - jan
// 1 - feb,  2 - mar ......
console.log(date.getMonth() +1)
console.log(date.getTime())
console.log(date.getFullYear())
console.log(date.getDay())

