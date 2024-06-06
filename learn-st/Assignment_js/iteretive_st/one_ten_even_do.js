// 54. Write a program to print 1 to 10 even numbers using a do while loop?

const input=require('prompt-sync')();

let i=parseInt(input("Enter the number:"))
do{
    if(i%2===0){
    console.log(i)
    
    }
    i++
}
while(i<=10)