// 51. Write a program to print 10 to 1 number using a do while loop?

const input=require('prompt-sync')();

let i=parseInt(input("Enter the number:"))
do{
    console.log(i)
    i--
}
while(i>=1)