// 50. Write a program to print 1 to 10 numbers using a do while loop?

const input=require('prompt-sync')();

let i=parseInt(input("Enter the number:"))
do{
    console.log(i)
    i++
}
while(i<=10)