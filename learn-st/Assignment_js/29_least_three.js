//29. Write a program to print the lest number of given three numbers?

const input=require('prompt-sync')();
let num1=parseInt(input("Enter the first number:"))
let num2=parseInt(input("Enter the second number:"))
let num3=parseInt(input("Enter the third number:"))
if(num1<num2 && num1<num3){
    console.log(num1+"is least number")
}
else if(num2<num1 && num2<num3){
    console.log(num2+"is least number")
}
else if(num3<num1 && num3<num2){
    console.log(num3+"is least number")
}
else{
    console.log("Three is equal")
}