// 57.write a program to print a multiplication table of 6 using a while loop.?

const input=require('prompt-sync')();

let i=parseInt(input("Enter the numebr:"))
    console.log("Multiplication table of 6:")    
while(i<=10){
console.log(`${i}*6=${6*i}`)
i++
}
 