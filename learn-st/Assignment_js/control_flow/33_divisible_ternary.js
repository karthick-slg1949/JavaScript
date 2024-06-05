//33. JS Program check if a number is divisible by 7 or not using a ternary operator?

const input=require('prompt-sync')();

let Numbers=parseInt(input("Enter the number:"))
Numbers %7===0?console.log(Numbers+"divisible by 7"):console.log(Numbers+"not a divisible by 7")