////25.write a program to print give number is odd or even ?

const input=require('prompt-sync')();
const number=parseInt(input("Enter the number:"))
if(number %2===0){
    console.log(number+"is even number")
}
else{
    console.log(number+"is odd number")
}