// 39. Write a program to print 10 to 1 number using a while loop

const input=require('prompt-sync')();

let i=parseInt(input("Enter the number:"))
while(i>=1){
    console.log(i)
    i--
}