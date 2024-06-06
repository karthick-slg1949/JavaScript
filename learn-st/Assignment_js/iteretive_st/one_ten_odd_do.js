// 55.Write a programe to print 1 to 10 odd numbers using do while Loop?

const input=require('prompt-sync')();

let i=parseInt(input("Enter the number:"))
do{
    if(i%2===1){
    console.log(i)
    }
    i++

}while(i<=10)