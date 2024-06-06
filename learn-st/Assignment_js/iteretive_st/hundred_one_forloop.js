// 45. Write a program to print 100 to 1 number using for loop?

const input=require('prompt-sync')();

let i=parseInt(input("Enter the number:"))
for(; i>=1; i--){
    console.log(i)
}