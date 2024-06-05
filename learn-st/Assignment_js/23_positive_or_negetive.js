//23.write a program to check if a number is positive or negetive ?

const input=require('prompt-sync')();
let number=parseInt(input("Enter the number :"))
if(number >=0){
    console.log(number+"is positive")
}
else{
    console.log(number+"is negetive")
}