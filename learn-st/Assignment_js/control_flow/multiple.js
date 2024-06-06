//22.write a program to check if a number is multiple of 3 or not?

const input=require('prompt-sync')();
let number=parseInt(input("Enter the number:"))
if(number%3===0){
    console.log(number+"is multiple of 3")
}
else{
    console.log(number+"its not a multiple of 3")
}