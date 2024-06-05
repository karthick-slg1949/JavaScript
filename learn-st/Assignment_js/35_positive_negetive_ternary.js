//35. Write a program to check if a number is positive or not using a ternary operator?

const input=require('prompt-sync')();

let number=parseInt(input("Enter the number:"))
let result=(number>0)?console.log("positive number"):console.log("negetive number")


