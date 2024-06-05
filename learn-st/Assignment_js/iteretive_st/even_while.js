// 42. Write a program to print 1 to 10 even numbers using a while loop

const input=require('prompt-sync')();

let i=parseInt(input("Enter the number:"))
while(i<=10){
    if(i % 2===0){
        console.log(i);
    }
    i++;
}

