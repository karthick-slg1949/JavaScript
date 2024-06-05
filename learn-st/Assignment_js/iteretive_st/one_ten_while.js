// 38. Write a program to print 1 to 10 numbers using a while loop

const input=require('prompt-sync')();

let i=parseInt(input("Enter the number:"))
while(i<=10){
    console.log(i)
    i++
}