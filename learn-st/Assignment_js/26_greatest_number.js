//26. Write a program to print the greatest number in given two numbers?

const input=require('prompt-sync')();
const num1=parseInt(input("Enter the number"))
const num2=parseInt(input("Enter the number"))
if(num1>num2){
    console.log(num1+"is greatest number")
}
else if(num1<num2){
    console.log(num2+"is greatest number")
}
else{
    console.log("both are equal")
}

