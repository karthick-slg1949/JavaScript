//34. JS Program to check if a number is multiple of 3 or not using a ternary operator?

const input=require('prompt-sync')();

let Number=parseInt(input("Enter the number:"))
Number %3===0?console.log(Number+"is multiple of 3"):console.log(Number+"is not a multiple of 3")
