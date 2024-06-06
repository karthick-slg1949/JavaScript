// 58. Write a program Factors of 24 using while loop (Factors of 24 are 1, ,3, 4, 6, 12, 24)?

const input=require('prompt-sync')();

let i=1
let number=parseInt(input("Enter the number:"))
while(i<=number){
    if(24 %i===0){
    console.log(i+"is fctors of 24")
    }
    else{
        console.log(i+"is not a factors of 24 ")
    }
    i++
}

// const input = require('prompt-sync')();

// let i = 1;
// const number = parseInt(input("Enter the number:"));

// while (i <= number) {
//     if (24 % i === 0) {
//         console.log(i + " is a factor of 24");
//     } else {
//         console.log(i + " is not a factor of 24");
//     }
//     i++;
// }
