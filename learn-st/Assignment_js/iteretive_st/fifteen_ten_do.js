// 53. Write a program to print 15 to 10 numbers using do while Loop?

const input=require('prompt-sync')();

let i=parseInt(input("Enter the number:"))
do{
    console.log(i)
    i--
}
while(i>=10)