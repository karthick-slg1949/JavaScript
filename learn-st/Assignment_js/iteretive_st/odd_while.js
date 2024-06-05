// 43. Write a program to print 1 to 10 odd numbers using 

const input=require('prompt-sync')();

let i=parseInt(input("Enter the number:"))
while(i<=10){
    if(i%2===1){
        console.log(i)
    }
    i++

}