// 37. Write a program to print even or odd for a given number using a ternary operator?

const input=require('prompt-sync')();

let number=parseInt(input("Enter the number:"))
number=(number%2===0)?console.log(number+"even number"):console.log(number+"odd number")