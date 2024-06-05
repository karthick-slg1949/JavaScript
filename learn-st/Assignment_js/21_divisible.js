//21.write a program to check if a number is divisible by 7 or not?


const input=require('prompt-sync')();
let number=parseInt(input("Enter the number:"))
if(number %7===0){
    console.log(number+"is divisible by 7")
}
else{
    console.log(number+"its not a divisible number by 7")
}