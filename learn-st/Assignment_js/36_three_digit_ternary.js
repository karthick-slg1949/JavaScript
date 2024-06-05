// 36. JS Program to check if a number is 3-digit numbers or not using a ternary operator?

const input=require('prompt-sync')();

let number=parseInt(input("Enter the number:"))
let=(number>100&&number<999)?console.log(number+"is three digit number"):console.log(number+"not a three digit number")
