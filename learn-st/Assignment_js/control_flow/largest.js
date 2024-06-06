//32. JavaScript Program to find largest of Three Numbers?

const input=require('prompt-sync')();

let num1=parseInt(input("Enter the first number:"))
let num2=parseInt(input("Enter the second number:"))
let num3=parseInt(input("Enter the third number:"))

if (num1>num2&& num1>num3){
    console.log(num1+"Largest Number")
}
else if(num2>num1&&num2>num3){
    console.log(num2+"Largest Number")
}
else if(num3>num1&& num3>num2){
    console.log(num3+"Largest Number")
}
else{
    console.log("Three are equal")
}