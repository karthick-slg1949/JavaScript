// 56.write a program first ten multiples of 4 using a while loop (4, 8, 12, 16…)?

const input=require('prompt-sync')();

let i=parseInt(input("Enter the number:"))
while(i<=40){
    if(i %4===0){
    console.log(i)
    }
    i++
}
