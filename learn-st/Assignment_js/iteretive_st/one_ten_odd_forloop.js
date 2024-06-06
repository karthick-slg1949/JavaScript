// 49. Write a program to print 1 to 10 odd numbers using forloop?

const input=require('prompt-sync')();

let i=parseInt(input("Enter the number:"))
for(; i<=10; i++){
    if(i%2===1){
        console.log(i)
    }
} 