// 46. Write a program to print 50 to 150 number using for loop?

const input=require('prompt-sync')();

let i=parseInt(input("Enter the number:"))
for(; i<=150; i++){
    console.log(i)
}